import Directions from "../../utils/directions";

type ScaleSizes =
  | "0"
  | "50"
  | "75"
  | "90"
  | "95"
  | "100"
  | "105"
  | "110"
  | "125"
  | "150";

type Scales = ScaleSizes | `${Directions}-${ScaleSizes}`;

type Scale = `scale-${Scales}`;

export default Scale;
