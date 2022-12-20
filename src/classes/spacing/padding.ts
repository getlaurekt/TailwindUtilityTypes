import { ShortenSides } from "../../utils/sides";
import Directions from "../../utils/directions";
import Spaces from "../../utils/spacing";

type Padding = `p-${Spaces}` | `p${Directions | ShortenSides}-${Spaces}`;

export default Padding;
