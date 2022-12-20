import Directions from "../../utils/directions";
import { Sides } from "../../utils/sides";
import { TypeSafeExclude } from "../../helpers/helpers";

type ExcludeSides = TypeSafeExclude<Sides, "inset" | "top" | "bottom">;

type PansSides = ExcludeSides | "up" | "down";

type TouchActionPans = `pan-${Directions | PansSides}`;

type TouchActions = `${
  | TouchActionPans
  | "auto"
  | "none"
  | "pinch-zoom"
  | "manipulation"}`;

type TouchAction = `touch-${TouchActions}`;

export default TouchAction;
