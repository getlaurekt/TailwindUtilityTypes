import { ShortenSides } from "../../utils/sides";
import Directions from "../../utils/directions";
import Spaces from "../../utils/spacing";

type ScrollPaddings = `p-${Spaces}` | `p${Directions | ShortenSides}-${Spaces}`;

type ScrollPadding = `scroll-${ScrollPaddings}`;

export default ScrollPadding;
