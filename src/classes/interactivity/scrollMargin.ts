import { ShortenSides } from "../../utils/sides";
import Directions from "../../utils/directions";
import Spaces from "../../utils/spacing";

type ScrollMargins = `m-${Spaces}` | `m${Directions | ShortenSides}-${Spaces}`;

type ScrollMargin = `scroll-${ScrollMargins}`;

export default ScrollMargin;
