import AccentColor from "./interactivity/accentColor";
import Appearance from "./interactivity/appearance";
import CaretColor from "./interactivity/caretColor";
import Cursor from "./interactivity/cursor";
import Resize from "./interactivity/resize";
import ScrollMargin from "./interactivity/scrollMargin";
import ScrollPadding from "./interactivity/scrollPadding";
import ScrollSnapAlign from "./interactivity/scrollSnapAlign";
import ScrollSnapStop from "./interactivity/scrollSnapStop";
import ScrollSnapType from "./interactivity/scrollSnapType";
import TouchAction from "./interactivity/touchAction";
import UserSelect from "./interactivity/userSelect";
import WillChange from "./interactivity/willChange";

type InteractivityClass =
  | AccentColor
  | Appearance
  | CaretColor
  | Cursor
  | PointerEvent
  | Resize
  | ScrollBehavior
  | ScrollMargin
  | ScrollPadding
  | ScrollSnapAlign
  | ScrollSnapStop
  | ScrollSnapType
  | TouchAction
  | UserSelect
  | WillChange;

export default InteractivityClass;
