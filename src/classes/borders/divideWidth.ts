import Directions from "../../utils/directions";

type DivideWidthSizes = "0" | "2" | "4" | "8";

type DivideWidths =
  | Directions
  | `${Directions}-${DivideWidthSizes | "reverse"}`;

type DivideWidth = `divide-${DivideWidths}`;

export default DivideWidth;
