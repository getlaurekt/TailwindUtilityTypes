type MaxWidth =
  | `max-w-${
      | "0"
      | "none"
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "full"
      | "min"
      | "max"
      | "fit"
      | "prose"}`
  | `max-w-screen-${"sm" | "md" | "lg" | "xl" | "2xl"}`;

export default MaxWidth;
