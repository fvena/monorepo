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
