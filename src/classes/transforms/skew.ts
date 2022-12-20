import Directions from "../../utils/directions";

type SkewSizes = "0" | "1" | "2" | "3" | "6" | "12";

type Skews = `${Directions}-${SkewSizes}`;

type Skew = `skew-${Skews}`;

export default Skew;
