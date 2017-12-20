import * as styledComponents from 'styled-components';
import { ITheme } from 'styles/types';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = (styledComponents as any) as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
