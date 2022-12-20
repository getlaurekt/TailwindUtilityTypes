type VerticalAligns =
  | "baseline"
  | "top"
  | "middle"
  | "bottom"
  | "text-top"
  | "text-bottom"
  | "sub"
  | "super";

type VerticalAlign = `align-${VerticalAligns}`;

export default VerticalAlign;
