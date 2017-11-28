# React Redux Typescript Styled-Components Boilerplate

## Getting Started
`$ git clone https://github.com/sandervspl/react-redux-typescript-styled-components-boilerplate`

`$ cd react-redux-typescript-styled-components-boilerplate && npm install`

`$ npm start` (run in development mode)

## Features
* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/rackt/redux)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle async actions
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience).
* [TSLint](https://palantir.github.io/tslint/) to maintain a consistent code style
* [Styled-Components](https://github.com/styled-components/styled-components/) with [styled-components](https://www.styled-components.com/) for CSS-in-JS
* [TypeScript](https://github.com/Microsoft/TypeScript) to use a typed superset of JavaScript for more consistent and better code
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm start`
* Build client: `$ npm run build:client`
* Build server: `$ npm run build:server`
* Start server: `$ npm run server`
* Remove build folder: `$ npm run clean`

**Automated for production with [npm-run-all](https://github.com/mysticatea/npm-run-all).**

`$ npm run build` (runs clean, build:client, build:server from the npm scripts with NODE_ENV=production).

## Deployment
Make sure all modules are installed:  
`$ npm install`

Create a build for production, this will add a `/dist` folder to the root with all bundles.  
`$ npm run build`

Run the server file to start server:  
`$ npm run server`

For production I recommend to use [PM2](http://pm2.keymetrics.io/) to run the server with advanced process management.

## Development Workflow
### Components
The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through the entire app.

### TypeScript
This boilerplate uses TypeScript for more consistent, secure and better code maintainability. TypeScript is a typed superset of JavaScript, which means variables can be assigned data types. TypeScript will see erronous behaviour before compiling your code, reducing bugs and improving code.

### Ducks
This boilerplate uses the [Ducks](https://github.com/erikras/ducks-modular-redux) pattern for Redux, that means that the actionTypes, actions and reducers are bundled together in an isolated module.

### Redux DevTools
To use de Redux DevTools install the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) from the chrome webstore.

## Styling
### Local styles
This project uses CSS-in-JS styling with [Styled-Components](https://github.com/styled-components/styled-components/).

### Global styles
You can find the global styles in the `styles` folder. In this folder you can also specify all the variables.  

## Roadmap
- TBD
