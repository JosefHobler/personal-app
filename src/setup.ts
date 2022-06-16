export const MAIN_PAGES = [
  "/",
  "/Omne",
  "/Projekty",
  "/Kontakt",
  "/Omne/Dovednosti",
  "/Omne/Konicky",
];

export const NAMES = [
  "Domů",
  "O mně",
  "Projekty",
  "Kontakt",
  "Dovednosti",
  "Koníčky",
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
export interface PagesProps {
  unmounting: boolean;
}

export interface PagesPropsExtended extends PagesProps {
  sidewaysScroll: (scroll: SCROLL_HORIZONTAL) => undefined;
}

export type contextTypes = { previousPage: number; firstLoad: boolean };
