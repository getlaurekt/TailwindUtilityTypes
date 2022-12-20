import { StandardColors, ColorsVariants } from "../../utils/colors";

type AccentColors = ColorsVariants | StandardColors;

type AccentColor = `accent-${AccentColors}`;

export default AccentColor;
