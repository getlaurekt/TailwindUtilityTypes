/**
 * Standard spacing values in Tailwind CSS
 */
type Spaces =
  | "0"
  | "px"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

/**
 * Arbitrary spacing value in square brackets
 * @example "[10px]", "[2rem]", "[calc(100%-1rem)]"
 */
export type ArbitrarySpacing = `[${string}]`;

/**
 * Spacing value (either standard or arbitrary)
 */
export type Spacing = Spaces | ArbitrarySpacing;

export default Spaces;
