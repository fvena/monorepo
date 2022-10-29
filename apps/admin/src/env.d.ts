// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vue" />
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  // eslint-disable-next-line import/no-default-export
  export default component;
}

// types for Vite env variables:
// (reference: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript)
interface ImportMetaEnv {
  readonly VITE_APP_CONFIG: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
