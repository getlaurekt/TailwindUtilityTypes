import { StandardColors, ColorsVariants } from "../../utils/colors";

type CaretColors = ColorsVariants | StandardColors;

type CaretColor = `caret-${CaretColors}`;

export default CaretColor;
