// global variables
declare const __DEV__: any;
declare const __CLIENT__: any;

// files
declare module '*.svg';
declare module '*.png' {
    const value: any;
    export = value;
}
