import BackgroundSize from "./backgrounds/backgorundSize";
import BackgroundAttachment from "./backgrounds/backgroundAttachment";
import BackgroundClip from "./backgrounds/backgroundClip";
import BackgroundColor from "./backgrounds/backgroundColor";
import BackgroundImage from "./backgrounds/backgroundImage";
import BackgroundOrigin from "./backgrounds/backgroundOrigin";
import BackgroundPosition from "./backgrounds/backgroundPosition";
import BackgroundRepeat from "./backgrounds/backgroundRepeat";
import GradientColorStops from "./backgrounds/gradientColorStops";

type BackgroundsClass =
  | BackgroundSize
  | BackgroundAttachment
  | BackgroundClip
  | BackgroundColor
  | BackgroundImage
  | BackgroundOrigin
  | BackgroundPosition
  | BackgroundRepeat
  | GradientColorStops;

export default BackgroundsClass;
