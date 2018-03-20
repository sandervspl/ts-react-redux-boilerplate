import * as styledComponents from '../../../node_modules/styled-components';
import { Theme } from 'styles/types';

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
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager };
export default styled;
