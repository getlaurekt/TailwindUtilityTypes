import Spaces from "../../utils/spacing";
import DynamicSpace from "../../utils/dynamicSpacing";

type Width = `w-${Spaces | DynamicSpace | "screen" | "min" | "max" | "fit"}`;

export default Width;
