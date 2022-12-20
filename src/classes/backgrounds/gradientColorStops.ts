import { GenerateUtilColors } from "../../helpers/helpers";

type GradientFrom = "from";
type GradientVia = "via";
type GradientTo = "to";

type GradientColorStops = GenerateUtilColors<
  GradientFrom | GradientVia | GradientTo
>;

export default GradientColorStops;
