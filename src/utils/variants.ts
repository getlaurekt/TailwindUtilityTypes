// Define all pseudo-class and state variants from Tailwind
type PseudoClassVariant =
  | "hover"
  | "focus"
  | "focus-within"
  | "focus-visible"
  | "active"
  | "visited"
  | "target"
  | "first"
  | "last"
  | "only"
  | "odd"
  | "even"
  | "first-of-type"
  | "last-of-type"
  | "only-of-type"
  | "empty"
  | "disabled"
  | "enabled"
  | "checked"
  | "indeterminate"
  | "default"
  | "required"
  | "valid"
  | "invalid"
  | "in-range"
  | "out-of-range"
  | "placeholder-shown"
  | "autofill"
  | "read-only"
  | "before"
  | "after"
  | "file"
  | "marker"
  | "selection"
  | "first-letter"
  | "first-line"
  | "backdrop"
  | "placeholder"
  | "selection"
  | "current"
  | "open";

// Define dark mode variant
type DarkVariant = "dark";

// Define print variant
type PrintVariant = "print";

// Define orientation variants
type OrientationVariant = "portrait" | "landscape";

// Define motion preference variants
type MotionVariant = "motion-safe" | "motion-reduce";

// Define contrast variants
type ContrastVariant = "contrast-more" | "contrast-less";

// Combine all Tailwind built-in variants
type BuiltInVariant =
  | PseudoClassVariant
  | DarkVariant
  | PrintVariant
  | OrientationVariant
  | MotionVariant
  | ContrastVariant;

// Export types
export type {
  PseudoClassVariant,
  DarkVariant,
  PrintVariant,
  OrientationVariant,
  MotionVariant,
  ContrastVariant,
  BuiltInVariant,
};
