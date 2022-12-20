type BackdropBackdropBrightnesses =
  | "0"
  | "50"
  | "75"
  | "90"
  | "95"
  | "100"
  | "105"
  | "110"
  | "125"
  | "150"
  | "200";

type BackdropBrightness = `backdrop-brightness-${BackdropBackdropBrightnesses}`;

export default BackdropBrightness;
