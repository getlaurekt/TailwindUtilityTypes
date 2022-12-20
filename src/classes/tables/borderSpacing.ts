import Spaces from "../../utils/spacing";
import Directions from "../../utils/directions";

type BorderSpacings = Spaces | `${Directions}-${Spaces}`;

type BorderSpacing = `border-spacing-${BorderSpacings}`;

export default BorderSpacing;
