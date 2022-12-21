import BgBlendMode from "./effects/bgBlendMode";
import BoxShadow from "./effects/boxShadow";
import BoxShadowColor from "./effects/boxShadowColor";
import MixBlendMode from "./effects/mixBlendMode";
import Opacity from "./effects/opacity";

type EffectsClass =
  | BgBlendMode
  | BoxShadow
  | BoxShadowColor
  | MixBlendMode
  | Opacity;

export default EffectsClass;
