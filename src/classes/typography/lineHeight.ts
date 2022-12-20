type LineHeights =
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";

type LineHeight = `leading-${LineHeights}`;

export default LineHeight;
