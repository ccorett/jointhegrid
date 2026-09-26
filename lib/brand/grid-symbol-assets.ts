/** Canonical GRID symbol assets (official supplied artwork). */

export const GRID_SYMBOL_LIGHT = {
  src: "/brand/grid-symbol-light.png",
  /** Updated after transparent export — intrinsic size for layout stability */
  width: 1040,
  height: 939,
} as const;

export const GRID_SYMBOL_DARK = {
  src: "/brand/grid-symbol-dark.png",
  width: 948,
  height: 948,
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
