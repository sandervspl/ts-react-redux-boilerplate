// global variables
declare const __DEV__: boolean;
declare const __CLIENT__: boolean;

// extend window object
interface Window {
    devToolsExtension: Function;
}

// extend NodeJS modules
interface NodeModule {
    hot: {
        accept: (cb: Function) => any;
    };
}

declare module NodeJS {
    interface Global {
        _babelPolyfill: any;
    }
}

// files
declare module '*.svg';
declare module '*.png' {
    const value: any;
    export = value;
}

