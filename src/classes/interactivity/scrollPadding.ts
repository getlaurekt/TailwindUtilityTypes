import { ShortenSides } from "../../utils/sides";
import Directions from "../../utils/directions";
import Spaces from "../../utils/spacing";

type PaddingMargins = `p-${Spaces}` | `p${Directions | ShortenSides}-${Spaces}`;

type PaddingMargin = `scroll-${PaddingMargins}`;

export default PaddingMargin;
