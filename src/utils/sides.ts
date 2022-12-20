type Sides = "inset" | "top" | "right" | "bottom" | "left";
type ShortenSides = "t" | "r" | "b" | "l";
type ShortenCornerSides = `${Extract<ShortenSides, "t" | "b">}${"r" | "l"}`;

export type { Sides, ShortenSides, ShortenCornerSides };
