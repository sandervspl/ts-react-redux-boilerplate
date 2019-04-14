# ts-react-redux-boilerplate
React / Redux boilerplate using TypeScript. See [ts-react-redux-boilerplate-ssr](https://github.com/sandervspl/ts-react-redux-boilerplate-ssr) if you need server-side rendering.

## Getting Started
To quickly install the boilerplate you can run
```
$ npx create-sandervspl web-redux <folder name>
```

Manually:
```
$ git clone https://github.com/sandervspl/ts-react-redux-boilerplate
```

```
$ cd ts-react-redux-boilerplate && npm i
```

```
$ npm dev
```

## Features
* [TypeScript](https://github.com/Microsoft/TypeScript) for better documentation of the written code
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
* [Styled-Components](https://github.com/styled-components/styled-components/) for CSS-in-JS
* [TSLint](https://palantir.github.io/tslint/) to maintain a consistent code style
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm run dev`
* Build client: `$ npm run build`
* Start server: `$ npm run start`

## Deployment
Make sure all modules are installed:  
```
$ npm i
```

Create a build for production, this will add a `/dist` folder to the root with all bundles.  
```
$ npm run build
```

Run the server file to start server:
```
$ npm run start
```

For production I recommend to use [PM2](http://pm2.keymetrics.io/) to run the server with advanced process management.

## Development Workflow
### TypeScript
This boilerplate uses TypeScript for more consistent and better code maintainability. TypeScript is a typed superset of JavaScript, which means variables can be assigned with data types. TypeScript will decrease bugs and improve documentation of the code.

### Components
The components are separated in `modules` and `common`. Modules are bundled components which depend on other components. Common components are components that are self-contained and can be used through the entire app.

### Ducks
This boilerplate uses the [Ducks](https://github.com/erikras/ducks-modular-redux) pattern for Redux, that means that the action types, actions and reducers are bundled together in an isolated module.

### Redux DevTools
To use the Redux DevTools install the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) from the chrome webstore.

## Styling
### Local styles
This project uses CSS-in-JS with [Styled-Components](https://github.com/styled-components/styled-components/).

### Global styles
You can configure the styled-components theme in the `styles` folder. In this folder you can also specify all the variables. When styling a components, grab the `theme` from the styled-component's props.

we use an augmented version of `styled-components` that adds the theme type to the styled object.

```ts
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.theme.color.white};
`
```

You can also use custom props and its types

```ts
import styled from 'styled-components';

const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.theme.color[props.color]};
`

interface ButtonProps {
  color: string;
}
```
