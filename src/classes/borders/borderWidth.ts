import Directions from "../../utils/directions";
import { ShortenSides, ShortenCornerSides } from "../../utils/sides";

type BorderWidthSizes = "0" | "2" | "4" | "8";

type BorderWidthVariants = Directions | ShortenSides | ShortenCornerSides;

type BorderWidths =
  | BorderWidthSizes
  | BorderWidthVariants
  | `${BorderWidthVariants}-${BorderWidthSizes}`;

type BorderWidth = "border" | `border-${BorderWidths}`;

export default BorderWidth;
