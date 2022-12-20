type TypeSafeExtract<T, U extends T> = T extends U ? T : never;
type TypeSafeExclude<T, U extends T> = T extends U ? never : T;

export type { TypeSafeExtract, TypeSafeExclude };
