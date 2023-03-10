type TransitionDurations =
  | "75"
  | "100"
  | "150"
  | "200"
  | "300"
  | "500"
  | "700"
  | "1000";

type TransitionDuration = `duration-${TransitionDurations}`;

export default TransitionDuration;
