/** Official #jointheGRID brand assets (from supplied brand sheet). */

export const BRAND_ASSETS = {
  primaryHorizontal: {
    src: "/brand/jointhegrid-primary-horizontal.png",
    width: 468,
    height: 126,
    alt: "#jointheGRID",
  },
  standaloneSymbol: {
    src: "/brand/jointhegrid-standalone-symbol.png",
    width: 345,
    height: 168,
    alt: "",
  },
  appIcon: {
    src: "/brand/jointhegrid-app-icon.png",
    width: 345,
    height: 168,
    alt: "GRID",
  },
  reversedHorizontal: {
    src: "/brand/jointhegrid-reversed.png",
    width: 610,
    height: 145,
    alt: "#jointheGRID",
  },
  monochrome: {
    src: "/brand/jointhegrid-monochrome.png",
    width: 215,
    height: 215,
    alt: "#jointheGRID",
  },
  favicon: {
    src: "/brand/favicon.ico",
  },
  appleTouchIcon: {
    src: "/brand/apple-touch-icon.png",
    width: 180,
    height: 180,
  },
} as const;

export type BrandLogoVariant = "primary" | "reversed" | "monochrome";
export type GridSymbolVariant = "standalone" | "app";
