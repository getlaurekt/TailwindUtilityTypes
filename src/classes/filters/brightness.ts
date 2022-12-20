type Brightnesses =
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

type Brightness = `brightness-${Brightnesses}`;

export default Brightness;
