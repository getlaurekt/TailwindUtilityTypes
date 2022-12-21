import Animation from "./transition-animation/animation";
import TransitionDelay from "./transition-animation/transitionDelay";
import TransitionDuration from "./transition-animation/transitionDuration";
import TransitionProperty from "./transition-animation/transitionProperty";
import TransitionTimingFunction from "./transition-animation/transitionTimingFunction";

type TransitionAnimationClass =
  | Animation
  | TransitionDelay
  | TransitionDuration
  | TransitionProperty
  | TransitionTimingFunction;

export default TransitionAnimationClass;
