export const VERSION: string

// utils
type NullValue = null | undefined | void
type MaybeArray<T> = T | T[]
type MaybePromise<T> = T | Promise<T>

type PartialNull<T> = {
  [P in keyof T]: T[P] | null
}
