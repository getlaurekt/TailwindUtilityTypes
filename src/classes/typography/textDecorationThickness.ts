type TextDecorationThicknesses =
  | "auto"
  | "from-font"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "8";

type TextDecorationThickness = `decoration-${TextDecorationThicknesses}`;

export default TextDecorationThickness;
