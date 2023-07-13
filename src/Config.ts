const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    env: import.meta.env.MODE,
    version: import.meta.env.PACKAGE_VERSION,
  },
  api: {
    url: import.meta.env.VITE_API_URL,
    apiKey: import.meta.env.VITE_API_KEY,
    hash: import.meta.env.VITE_API_HASH,
    ts: import.meta.env.VITE_API_TS,
  },
}

export default Config
