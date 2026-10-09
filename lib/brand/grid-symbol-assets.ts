/** Canonical GRID symbol assets (official supplied artwork). */

export const GRID_SYMBOL_LIGHT = {
  src: "/brand/grid-symbol-light.webp",
  width: 512,
  height: 462,
} as const;

export const GRID_SYMBOL_DARK = {
  src: "/brand/grid-symbol-dark.webp",
  width: 512,
  height: 512,
} as const;

export type GridSymbolTheme = "light" | "dark";

/** Use with section background tokens (e.g. `bg-primary-navy` → `"dark"`). */
export type GridSectionBackground = "light" | "dark";

export function gridSymbolThemeForSection(
  section: GridSectionBackground
): GridSymbolTheme {
  return section === "dark" ? "dark" : "light";
}

export function gridSymbolAsset(theme: GridSymbolTheme) {
  return theme === "dark" ? GRID_SYMBOL_DARK : GRID_SYMBOL_LIGHT;
}
