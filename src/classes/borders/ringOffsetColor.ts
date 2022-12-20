import { StandardColors, ColorsVariants } from "../../utils/colors";

type RingOffsetColors = StandardColors | ColorsVariants;

type RingOffsetColor = `ring-offset-${RingOffsetColors}`;

export default RingOffsetColor;
