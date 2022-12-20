import { StandardColors, ColorsVariants } from "../../utils/colors";

type TextDecorationColors = ColorsVariants | StandardColors;

type TextDecorationColor = `decoration-${TextDecorationColors}`;

export default TextDecorationColor;
