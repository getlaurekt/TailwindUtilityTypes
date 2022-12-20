type TransitionTimingFunctions = "linear" | "in" | "out" | "in-out";

type TransitionTimingFunction = `ease-${TransitionTimingFunctions}`;

export default TransitionTimingFunction;
