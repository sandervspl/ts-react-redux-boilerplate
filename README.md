# ts-react-ssr-boilerplate

## Getting Started
```
$ git clone https://github.com/sandervspl/ts-react-ssr-boilerplate
```

```
$ cd ts-react-ssr-boilerplate && npm i
```

```
$ npm dev
```

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
* [Styled-Components](https://github.com/styled-components/styled-components/) for CSS-in-JS
* [TypeScript](https://github.com/Microsoft/TypeScript) for better documentation of the written code
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm dev`
* Build client: `$ npm run build:client`
* Build server: `$ npm run build:server`
* Start server: `$ npm run start`
* Remove build folder: `$ npm run clean`

**Automated for production with [npm-run-all](https://github.com/mysticatea/npm-run-all).**

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
### Components
The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through the entire app.

### TypeScript
This boilerplate uses TypeScript for more consistent and better code maintainability. TypeScript is a typed superset of JavaScript, which means variables can be assigned with data types. TypeScript will decrease bugs and improve documentation of the code.

### Ducks
This boilerplate uses the [Ducks](https://github.com/erikras/ducks-modular-redux) pattern for Redux, that means that the actionTypes, actions and reducers are bundled together in an isolated module.

### Redux DevTools
To use de Redux DevTools install the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) from the chrome webstore.

## Styling
### Local styles
This project uses CSS-in-JS styling with [Styled-Components](https://github.com/styled-components/styled-components/).

### Global styles
You can configure the styled-components theme in the `styles` folder. In this folder you can also specify all the variables. When styling a components, grab the `theme` from the styled-component's props.

Example:
```
const Button = styled.button`
    background-color: ${props => props.theme.color.white};
`
```

## Server-side Rendering
Server-side Rendering is enabled by default. This can be disabled by changing `SSR = true` to `false` in `src/config/index.ts`. This will generate an HTML file and inject all chunks.

## Bash scripts
For the best development experience, I recommend adding the following scripts to your `.bashrc` file.

### Create new Duck module
```bash
newduck() {
    D="src/app/ducks/modules/$1";
    mkdir -p $D || return;
    touch "$D/index.ts" "$D/types.ts";
}
```
Usage:
```
$ newduck user
```
This will create a new folder in `app/ducks/modules` called User with an `index.ts` and `types.ts` file.
Don't forget to add this new module to `ducks/index.ts`.

### Create new common component
```bash
newcommon() {
    FILE="$1.ts";
    P="src/app/components/common/$FILE";
    touch $P;
    printf "import styled from 'styled-components'\n\n" >> $P;
}
```
Usage:
```
$ newcommon Button
```
This will create a new file in `app/components/common` with `import styled from 'styled-components` pre-written.

### Create a new module component
```bash
newmodule() {
    M="src/app/components/modules/$1";
    mkdir -p $M || return;
    mkdir -p "$M/components" || return;
    touch "$M/index.tsx" "$M/styled.ts" "$M/types.ts";
    printf "import styled from 'styled-components';\n\n" >> "$M/styled.ts";
}
```
Usage:
```
$ newmodule Homepage
```
This will create a new folder in `app/components/modules` with an `index.tsx`, `styled.ts` and `types.ts` file.
