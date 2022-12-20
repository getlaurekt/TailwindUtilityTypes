import Directions from "../../utils/directions";

type Resizes = "none" | Directions;

type Resize = "resize" | `resize-${Resizes}`;

export default Resize;
