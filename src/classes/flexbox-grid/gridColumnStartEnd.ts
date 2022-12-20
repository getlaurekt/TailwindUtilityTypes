import GridNumberity from "../../utils/gridNumberity";

type GridColumnSpan = `span-${GridNumberity | "full"}`;
type GridColumnStart = `start-${GridNumberity | "13" | "auto"}`;
type GridColumnEnd = `end-${GridNumberity | "13" | "auto"}`;
type GridColumnStartEnd =
  | `col-${"auto" | GridColumnSpan}`
  | `col-${GridColumnStart}`
  | `col-${GridColumnEnd}`;

export default GridColumnStartEnd;
