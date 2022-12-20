import { TypeSafeExtract } from "../helpers/helpers";

type StandardColors = "inherit" | "current" | "transparent" | "black" | "white";

type Colors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

type Color<C extends Colors> = TypeSafeExtract<Colors, C>;

type Saturation =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type ColorsVariants = `${Colors}-${Saturation}`;

export type { StandardColors, Colors, Color, Saturation, ColorsVariants };
