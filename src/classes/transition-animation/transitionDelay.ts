type TransitionDelays =
  | "75"
  | "100"
  | "150"
  | "200"
  | "300"
  | "500"
  | "700"
  | "1000";

type TransitionDelay = `delay-${TransitionDelays}`;

export default TransitionDelay;
