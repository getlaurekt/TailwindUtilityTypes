import Directions from "../../utils/directions";
import Spaces from "../../utils/spacing";
import DynamicSpace from "../../utils/dynamicSpacing";
import { TypeSafeExtract } from "../../helpers/helpers";

type TranslatePercentageSizes = TypeSafeExtract<
  DynamicSpace,
  "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full"
>;

type Translates = `${Directions}-${Spaces | TranslatePercentageSizes}`;

type Translate = `translate-${Translates}`;

export default Translate;
