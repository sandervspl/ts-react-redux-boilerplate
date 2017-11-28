/*
 * __NOTE: Declaring global variables and modules
 * TypeScript wants to understand stuff. It does not understand globals very well. And sometimes it does not
 * understand certain files. In order for the compiler to let us compile, we have to let him know what to do
 * with these following vars and files.
 */

// global variables
declare const __DEV__: any;
declare const __CLIENT__: any;

/*
 * Declare these file types as modules so we can use "import" instead of "require()"
 */
// files
declare module '*.svg';
declare module '*.png' {
    const value: any;
    export = value;
}
