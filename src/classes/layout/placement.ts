import Space from "../../utils/spacing";
import Directions from "../../utils/directions";
import { Sides } from "../../utils/sides";
import DynamicSpace from "../../utils/dynamicSpacing";
import { TypeSafeExclude, TypeSafeExtract } from "../../helpers/helpers";

type Inset = TypeSafeExtract<Sides, "inset">;
type Side = TypeSafeExclude<Sides, Inset>;
type Dynamic = TypeSafeExtract<
  DynamicSpace,
  "auto" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full"
>;
type Variants = Space | Dynamic;
type Placement =
  | `${Inset}-${Variants}`
  | `${Inset}-${Directions}-${Variants}`
  | `${Side}-${Variants}`;

export default Placement;
