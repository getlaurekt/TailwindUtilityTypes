import Spaces from "../../utils/spacing";

type MaxHeight = `max-h-${
  | Spaces
  | `${"full" | "screen" | "min" | "max" | "fit"}`}`;

export default MaxHeight;
