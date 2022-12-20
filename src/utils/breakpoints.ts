import { TypeSafeExtract } from "../helpers/helpers";
import ModifierSymbol from "./modifiers";

type BreakpointMobile = "";
type BreakpointSM = `sm${ModifierSymbol}`;
type BreakpointMD = `md${ModifierSymbol}`;
type BreakpointLG = `lg${ModifierSymbol}`;
type BreakpointXL = `xl${ModifierSymbol}`;
type Breakpoint2XL = `2xl${ModifierSymbol}`;

type Breakpoint<B extends Breakpoints> = TypeSafeExtract<Breakpoints, B>;

type Breakpoints =
  | BreakpointMobile
  | BreakpointSM
  | BreakpointMD
  | BreakpointLG
  | BreakpointXL
  | Breakpoint2XL;

export type {
  Breakpoint,
  Breakpoints,
  BreakpointMobile,
  BreakpointSM,
  BreakpointMD,
  BreakpointLG,
  BreakpointXL,
  Breakpoint2XL,
};
