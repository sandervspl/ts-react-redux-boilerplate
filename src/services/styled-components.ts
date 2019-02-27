import { ThemedStyledComponentsModule } from '../../node_modules/@types/styled-components';
import * as styledComponents from '../../node_modules/styled-components/dist/styled-components.browser.cjs';
import { theme } from 'styles';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

// Export functions
export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager };

// Export styled object as default
export default styled;
