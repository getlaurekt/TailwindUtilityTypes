import Content from "./typography/content";
import FontFamily from "./typography/fontFamily";
import FontSize from "./typography/fontSize";
import FontSmoothing from "./typography/fontSmoothing";
import FontStyle from "./typography/fontStyle";
import FontVariantNumeric from "./typography/fontVariantNumeric";
import FontWeight from "./typography/fontWeight";
import LetterSpacing from "./typography/letterSpacing";
import LineHeight from "./typography/lineHeight";
import ListStylePosition from "./typography/listStylePosition";
import ListStyleType from "./typography/listStyleType";
import TextAlign from "./typography/textAlign";
import TextColor from "./typography/textColor";
import TextDecoration from "./typography/textDecoration";
import TextDecorationColor from "./typography/textDecorationColor";
import TextDecorationStyle from "./typography/textDecorationStyle";
import TextDecorationThickness from "./typography/textDecorationThickness";
import TextIndent from "./typography/textIndent";
import TextOverflow from "./typography/textOverflow";
import TextTransform from "./typography/textTransform";
import TextUnderlineOffset from "./typography/textUnderlineOffset";
import VerticalAlign from "./typography/verticalAlign";
import Whitespace from "./typography/whitespace";
import WordBreak from "./typography/wordBreak";

type TypographyClass =
  | Content
  | FontFamily
  | FontSize
  | FontSmoothing
  | FontStyle
  | FontVariantNumeric
  | FontWeight
  | LetterSpacing
  | LineHeight
  | ListStylePosition
  | ListStyleType
  | TextAlign
  | TextColor
  | TextDecoration
  | TextDecorationColor
  | TextDecorationStyle
  | TextDecorationThickness
  | TextIndent
  | TextOverflow
  | TextTransform
  | TextUnderlineOffset
  | VerticalAlign
  | Whitespace
  | WordBreak;

export default TypographyClass;
