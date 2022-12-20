import { StandardColors, ColorsVariants } from "../../utils/colors";

type OutlineColors = StandardColors | ColorsVariants;

type OutlineColor = `outline-${OutlineColors}`;

export default OutlineColor;
