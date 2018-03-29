import * as React from 'react';
import * as styledComponents from '../../../node_modules/styled-components';
import { Theme } from 'styles/types';

const {
    ServerStyleSheet,
    StyleSheetManager,
} = styledComponents;

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, Theme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
    styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
    return styledFunction;
}

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager, withProps };
export default styled;
