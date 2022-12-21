import BorderColor from "./borders/borderColor";
import BorderRadius from "./borders/borderRadius";
import BorderStyle from "./borders/borderStyle";
import BorderWidth from "./borders/borderWidth";
import DivideColor from "./borders/divideColor";
import DivideStyle from "./borders/divideStyle";
import DivideWidth from "./borders/divideWidth";
import OutlineColor from "./borders/outlineColor";
import OutlineOffset from "./borders/outlineOffset";
import OutlineStyle from "./borders/outlineStyle";
import OutlineWidth from "./borders/outlineWidth";
import RingColor from "./borders/ringColor";
import RingOffsetColor from "./borders/ringOffsetColor";
import RingOffsetWidth from "./borders/ringOffsetWidth";
import RingWidth from "./borders/ringWidth";

type BordersClass =
  | BorderColor
  | BorderRadius
  | BorderStyle
  | BorderWidth
  | DivideColor
  | DivideStyle
  | DivideWidth
  | OutlineColor
  | OutlineOffset
  | OutlineStyle
  | OutlineWidth
  | RingColor
  | RingOffsetColor
  | RingOffsetWidth
  | RingWidth;

export default BordersClass;
