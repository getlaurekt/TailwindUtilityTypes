import { StandardColors, ColorsVariants } from "../../utils/colors";

type BackgroundColors = ColorsVariants | StandardColors;

type BackgroundColor = `bg-${BackgroundColors}`;

export default BackgroundColor;
