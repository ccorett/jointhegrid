import sharp from "sharp";

const THRESHOLD = 252;

/** Flood-fill near-white background from image edges; preserves interior whites (e.g. G on dark). */
async function transparentBackground(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];

  const idx = (x, y) => y * width + x;
  const isBg = (i) => {
    const o = i * channels;
    return data[o] >= THRESHOLD && data[o + 1] >= THRESHOLD && data[o + 2] >= THRESHOLD;
  };

  for (let x = 0; x < width; x++) {
    queue.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y], [width - 1, y]);
  }

  while (queue.length) {
    const [x, y] = queue.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const i = idx(x, y);
    if (visited[i]) continue;
    if (!isBg(i)) continue;
    visited[i] = 1;
    data[i * channels + 3] = 0;
    queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  await sharp(data, { raw: { width, height, channels } })
    .trim({ threshold: 10 })
    .png()
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  return meta;
}

const lightIn =
  "/home/ubuntu/.cursor/projects/workspace/assets/8a30071b-9ec2-4976-b127-ba7d2fb29638.png";
const darkIn =
  "/home/ubuntu/.cursor/projects/workspace/assets/70b661d2-bfef-4b82-ad0d-dd135b9ca6a1.png";

const lightOut = "/workspace/public/brand/grid-symbol-light.png";
const darkOut = "/workspace/public/brand/grid-symbol-dark.png";

const lightMeta = await transparentBackground(lightIn, lightOut);
const darkMeta = await transparentBackground(darkIn, darkOut);

console.log("light", lightMeta.width, lightMeta.height);
console.log("dark", darkMeta.width, darkMeta.height);

for (const s of [16, 32, 48, 180, 192, 512]) {
  await sharp(darkOut)
    .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(`/workspace/public/brand/favicon-${s}.png`);
}
await sharp(darkOut).resize(32, 32).toFile("/workspace/public/brand/favicon.ico");
await sharp(darkOut).resize(180, 180).toFile("/workspace/public/brand/apple-touch-icon.png");
