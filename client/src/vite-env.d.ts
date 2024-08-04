/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'production';
  readonly VITE_SERVER: 'string';
  readonly VITE_BUCKET_NAME: 'string';
  readonly VITE_BUCKET_REGION: 'string';
  readonly VITE_ACCESS_KEY: 'string';
  readonly VITE_SECRET_KEY: 'string';

  readonly VITE_TEST_BUCKET_NAME: 'string';
  readonly VITE_TEST_BUCKET_REGION: 'string';
  readonly VITE_TEST_ACCESS_KEY: 'string';
  readonly VITE_TEST_SECRET_KEY: 'string';

  readonly VITE_GOOGLE_ANALYTICS_TRACKING_ID: 'string';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png';

declare module '*.otf';
