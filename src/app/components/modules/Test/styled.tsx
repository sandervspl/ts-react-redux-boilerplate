import * as i from 'app/interfaces';
import * as React from 'react';
import styled from 'styled-components';
import LogoIcon from 'vectors/logo.svg';

const SectionBase: React.StatelessComponent<i.BaseStyled> = props => (
  <section {...props}>
    {props.children}
  </section>
);
export const Section = styled(SectionBase)`
    text-align: center;
`;

// Extend LogoIcon component with styling
const LogoIconWrapperBase: React.StatelessComponent<i.BaseStyled> = props => <LogoIcon {...props} />;
export const LogoIconWrapper = styled(LogoIconWrapperBase)`
    width: 200px;
    display: block;
    margin: 0 auto;
`;
