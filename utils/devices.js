import { screens } from "tailwindcss/defaultTheme";

// Return Size Object with bare numbers
export const sizes = Object.keys(screens).reduce((obj, key) => {
  const themeKey = screens[key];
  obj[key] = parseInt(themeKey.replace(/px/i, ""));
  return obj;
}, {});

export const mediaQuery = {
  "2xl": `(min-width: ${screens["2xl"]})`,
  xl: `(min-width: ${screens["xl"]})`,
  lg: `(min-width: ${screens["lg"]})`,
  md: `(min-width: ${screens["md"]})`,
  sm: `(min-width: ${screens["sm"]})`,
};
