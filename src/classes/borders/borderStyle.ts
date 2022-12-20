type BorderStyles =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "hidden"
  | "none";

type BorderStyle = `border-${BorderStyles}`;

export default BorderStyle;
