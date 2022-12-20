import { StandardColors, ColorsVariants } from "../../utils/colors";

type Strokes = StandardColors | ColorsVariants;

type Stroke = `stroke-${Strokes}`;

export default Stroke;
