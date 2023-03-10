import Spaces from "../../utils/spacing";
import DynamicSpace from "../../utils/dynamicSpacing";
import { TypeSafeExtract } from "../../helpers/helpers";

type HeightSizeHelper =
  | TypeSafeExtract<
      DynamicSpace,
      | "1/2"
      | "1/3"
      | "2/3"
      | "1/4"
      | "2/4"
      | "3/4"
      | "1/5"
      | "2/5"
      | "3/5"
      | "4/5"
      | "1/6"
      | "2/6"
      | "3/6"
      | "4/6"
      | "5/6"
    >
  | "screen"
  | "min"
  | "max"
  | "fit";

type Height = `h-${HeightSizeHelper}`;

export default Height;
