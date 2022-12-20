import { ColorsVariants, StandardColors } from "../utils/colors";

type TypeSafeExtract<T, U extends T> = T extends U ? T : never;
type TypeSafeExclude<T, U extends T> = T extends U ? never : T;

type GenerateUtilColors<P extends string> = `${Lowercase<P>}-${
  | StandardColors
  | ColorsVariants}`;

export type { TypeSafeExtract, TypeSafeExclude, GenerateUtilColors };
