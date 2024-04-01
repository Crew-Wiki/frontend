/* eslint-disable no-unused-vars */
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_SERVER: 'string';
    REACT_APP_BUCKET_NAME: 'string';
    REACT_APP_BUCKET_REGION: 'string';
    REACT_APP_ACCESS_KEY: 'string';
    REACT_APP_SECRET_KEY: 'string';

    REACT_APP_TEST_BUCKET_NAME: 'string';
    REACT_APP_TEST_BUCKET_REGION: 'string';
    REACT_APP_TEST_ACCESS_KEY: 'string';
    REACT_APP_TEST_SECRET_KEY: 'string';
  }
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.otf';
