import { TypeSafeExclude } from "../../helpers/helpers";
import { Sides } from "../../utils/sides";

type ExcludeSides = TypeSafeExclude<Sides, "inset">;

type BackgroundPositions =
  | `${ExcludeSides | "center"}`
  | `${"left"}-${"bottom" | "top"}`
  | `${"right"}-${"bottom" | "top"}`;

type BackgroundPosition = `bg-${BackgroundPositions}`;

export default BackgroundPosition;
