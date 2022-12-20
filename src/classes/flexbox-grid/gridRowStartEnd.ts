import { TypeSafeExclude } from "../../helpers/helpers";
import GridNumberity from "../../utils/gridNumberity";

type SpanNumberity = TypeSafeExclude<
  GridNumberity,
  "12" | "11" | "10" | "9" | "8" | "7"
>;
type StartEndNumberity = TypeSafeExclude<
  GridNumberity,
  "12" | "11" | "10" | "9" | "8"
>;

type GridRowSpan = `${"auto" | `span-${SpanNumberity | "full"}`}`;
type GridRowStart = `start-${StartEndNumberity | "auto"}`;
type GridRowEnd = `end-${StartEndNumberity | "auto"}`;
type GridRowStartEnd = `row-${GridRowSpan | GridRowStart | GridRowEnd}`;

export default GridRowStartEnd;
