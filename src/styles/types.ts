import theme from './theme';

export interface BaseStyled {
  theme?: typeof theme;
  className?: string;
}
