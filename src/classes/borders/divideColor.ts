import { StandardColors, ColorsVariants } from "../../utils/colors";

type DivideColors = StandardColors | ColorsVariants;

type DivideColor = `divide-${DivideColors}`;

export default DivideColor;
