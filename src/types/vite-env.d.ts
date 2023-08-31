/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_BASEURL: string
  VITE_API_BASEURL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
