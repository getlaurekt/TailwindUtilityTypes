import { StandardColors, ColorsVariants } from "../../utils/colors";

type GradientColorStopsess = ColorsVariants | StandardColors;

type GradientFrom = "from-";
type GradientVia = "via-";
type GradientTo = "to-";

type GradientColorStops = `${
  | GradientFrom
  | GradientVia
  | GradientTo}${GradientColorStopsess}`;

export default GradientColorStops;
