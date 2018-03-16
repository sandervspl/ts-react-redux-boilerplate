// global variables
declare const __DEV__: any;
declare const __CLIENT__: any;

// extend window object
interface Window {
    devToolsExtension: Function;
}

// extend NodeJS module global object
interface NodeModule {
    hot: {
        accept: (cb: Function) => any;
    };
}

// files
declare module '*.svg';
declare module '*.png' {
    const value: any;
    export = value;
}

