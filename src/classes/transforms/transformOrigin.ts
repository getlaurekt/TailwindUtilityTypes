import { TypeSafeExclude } from "../../helpers/helpers";
import { Sides } from "../../utils/sides";

type ExcludeSides = TypeSafeExclude<Sides, "inset">;

type TransformOrigins =
  | "center"
  | ExcludeSides
  | `${"top"}-${"left" | "right"}`
  | `${"bottom"}-${"left" | "right"}`;

type TransformOrigin = `origin-${TransformOrigins}`;

export default TransformOrigin;
