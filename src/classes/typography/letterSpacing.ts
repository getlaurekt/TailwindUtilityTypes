type LetterSpacings =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

type LetterSpacing = `tracking-${LetterSpacings}`;

export default LetterSpacing;
