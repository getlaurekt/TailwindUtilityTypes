type BackdropBackdropContrasts =
  | "0"
  | "50"
  | "75"
  | "100"
  | "125"
  | "150"
  | "200";

type BackdropContrast = `backdrop-contrast-${BackdropBackdropContrasts}`;

export default BackdropContrast;
