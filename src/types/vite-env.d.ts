/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APPLICATION_NAME: string
  VITE_API_BASEURL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
