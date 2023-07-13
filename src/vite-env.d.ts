/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string
  readonly PACKAGE_VERSION: string
  readonly VITE_API_URL: string
  readonly VITE_API_URL?: string
  readonly VITE_API_KEY?: string
  readonly VITE_API_HASH?: string
  readonly VITE_API_TS?: string
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
