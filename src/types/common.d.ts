export {}
export const VERSION: string

// utils
export type NullValue = null | undefined | void
export type MaybeArray<T> = T | T[]
export type MaybePromise<T> = T | Promise<T>

export type PartialNull<T> = {
  [P in keyof T]: T[P] | null
}
