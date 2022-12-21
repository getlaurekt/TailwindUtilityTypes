import BackdropBlur from "./filters/backdropBlur";
import BackdropBrightness from "./filters/backdropBrightness";
import BackdropContrast from "./filters/backdropContrast";
import BackdropGrayscale from "./filters/backdropGrayscale";
import BackdropHueRotate from "./filters/backdropHueRotate";
import BackdropInvert from "./filters/backdropInvert";
import BackdropOpacity from "./filters/backdropOpacity";
import BackdropSaturate from "./filters/backdropSaturate";
import BackdropSepia from "./filters/backdropSepia";
import Blur from "./filters/blur";
import Brightness from "./filters/brightness";
import Contrast from "./filters/contrast";
import DropShadow from "./filters/dropShadow";
import Grayscale from "./filters/grayscale";
import HueRotate from "./filters/hueRotate";
import Invert from "./filters/invert";
import Saturate from "./filters/saturate";
import Sepia from "./filters/sepia";

type FiltersClass =
  | BackdropBlur
  | BackdropBrightness
  | BackdropContrast
  | BackdropGrayscale
  | BackdropHueRotate
  | BackdropInvert
  | BackdropOpacity
  | BackdropSaturate
  | BackdropSepia
  | Blur
  | Brightness
  | Contrast
  | DropShadow
  | Grayscale
  | HueRotate
  | Invert
  | Saturate
  | Sepia;

export default FiltersClass;
