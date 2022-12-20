type TransitionProperties =
  | "none"
  | "all"
  | "colors"
  | "opacity"
  | "shadow"
  | "transform";

type TransitionProperty = `transition-${TransitionProperties}`;

export default TransitionProperty;
