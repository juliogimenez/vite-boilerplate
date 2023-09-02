/// <reference types="vite/client" />
export {}
export interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_BASEURL: string
  VITE_API_BASEURL: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
