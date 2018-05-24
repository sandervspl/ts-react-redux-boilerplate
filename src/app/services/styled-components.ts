import * as i from 'app/interfaces';
import * as styledComponents from '../../../node_modules/styled-components';

const {
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents;

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<i.Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager };
export default styled;
