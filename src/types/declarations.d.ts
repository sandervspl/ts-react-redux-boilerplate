// global variables
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __ACC__: boolean;

// extend window object
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

// files
declare module '*.svg';
declare module '*.png' {
  const value: string;
  export = value;
}
declare module '*.json' {
  const value: any;
  export default value;
}
