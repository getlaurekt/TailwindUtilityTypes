type DivideStyles =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "hidden"
  | "none";

type DivideStyle = `divide-${DivideStyles}`;

export default DivideStyle;
