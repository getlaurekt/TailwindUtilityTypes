type BackgroundRepeats =
  | "repeat"
  | "no-repeat"
  | "repeat-x"
  | "repeat-y"
  | "repeat-round"
  | "repeat-space";

type BackgroundRepeat = `bg-${BackgroundRepeats}`;

export default BackgroundRepeat;
