import { ColorsVariants, StandardColors } from "../../utils/colors";
import Directions from "../../utils/directions";
import { ShortenSides } from "../../utils/sides";

type BorderColors =
  | StandardColors
  | ColorsVariants
  | `${Directions | ShortenSides}-${ColorsVariants}`;

type BorderColor = `border-${BorderColors}`;

export default BorderColor;
