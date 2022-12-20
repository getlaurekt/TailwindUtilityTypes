import { ShortenSides } from "../../utils/sides";
import Directions from "../../utils/directions";
import Spaces from "../../utils/spacing";

type Margin = `m-${Spaces}` | `m${Directions | ShortenSides}-${Spaces}`;

export default Margin;
