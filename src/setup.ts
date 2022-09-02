export const MAIN_PAGES = [
  "/",
  "/About",
  "/Projects",
  "/Contact",
  "/About/Skills",
  "/About/Habits",
];

export enum SCROLL_VERTICAL {
  down = "down",
  up = "up",
  null = "null",
}
export enum SCROLL_HORIZONTAL {
  right = "right",
  left = "left",
  null = "null",
}

export enum displayResponsive {
  smallLayout,
  mediumLayout,
  extraLargeLayout,
}

export interface PagesProps {
  sidewaysScroll: (scroll: SCROLL_HORIZONTAL) => undefined;
}

export type contextTypes = { previousPage: number; firstLoad: boolean };

// Dovednosti
export const PRIMARY_TECHNOLOGIES = [
  { name: "HTML", rating: 3.5 },
  { name: "CSS", rating: 3 },
  { name: "Javascript", rating: 3.5 },
  { name: "React", rating: 3.5 },
  { name: "Git", rating: 3 },
  { name: "Sass", rating: 2.5 },
];

export const OTHER_TECHNOLOGIES = [
  "Typescript",
  "Bootstrap",
  "Redux Toolkit",
  "C++",
];
