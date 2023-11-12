/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMU: string;
  readonly VITE_FIREBASE_HTTPS_FUNCTIONS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
