import { StandardColors, ColorsVariants } from "../../utils/colors";

type BoxShadowColors = StandardColors | ColorsVariants;

type BoxShadowColor = `shadow-${BoxShadowColors}`;

export default BoxShadowColor;
