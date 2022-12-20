import Directions from "../../utils/directions";

type ScrollSnapTypes = "none" | Directions | "both" | "mandatory" | "proximity";

type ScrollSnapType = `snap-${ScrollSnapTypes}`;

export default ScrollSnapType;
