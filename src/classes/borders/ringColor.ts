import { StandardColors, ColorsVariants } from "../../utils/colors";

type RingColors = StandardColors | ColorsVariants;

type RingColor = `ring-${RingColors}`;

export default RingColor;
