import * as React from 'react';
import styled, { BaseStyled } from 'styled-components';
import LogoIcon from 'vectors/logo.svg';

const SectionBase: React.StatelessComponent<BaseStyled> = props => (
  <section {...props}>
    {props.children}
  </section>
);
export const Section = styled(SectionBase)`
    text-align: center;
`;

// Extend LogoIcon component with styling
const LogoIconWrapperBase: React.StatelessComponent<BaseStyled> = props => <LogoIcon {...props} />;
export const LogoIconWrapper = styled(LogoIconWrapperBase)`
    width: 200px;
    display: block;
    margin: 0 auto;
`;
