type BackgroundImages =
  | `gradient-to-${"t" | "tr" | "r" | "br" | "b" | "bl" | "l" | "tl"}`
  | "none";

type BackgroundImage = `bg-${BackgroundImages}`;

export default BackgroundImage;
