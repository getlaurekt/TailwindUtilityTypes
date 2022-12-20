import { StandardColors, ColorsVariants } from "../../utils/colors";

type Fills = StandardColors | ColorsVariants;

type Fill = `fill-${Fills}`;

export default Fill;
