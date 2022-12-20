import { ShortenCornerSides, ShortenSides } from "../../utils/sides";

type BorderRadiusSizes =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

type BorderRadiusVariants = `${ShortenSides | ShortenCornerSides}`;
type BorderRadiusess =
  | `${BorderRadiusVariants}-${BorderRadiusSizes}`
  | BorderRadiusSizes
  | BorderRadiusVariants;

type BorderRadius = "rounded" | `rounded-${BorderRadiusess}`;

export default BorderRadius;
