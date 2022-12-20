import { StandardColors, ColorsVariants } from "../../utils/colors";

type TextColors = ColorsVariants | StandardColors;

type TextColor = `text-${TextColors}`;

export default TextColor;
