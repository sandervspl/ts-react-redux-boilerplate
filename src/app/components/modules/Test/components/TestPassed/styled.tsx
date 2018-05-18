import * as React from 'react';
import styled, { BaseStyled } from 'styled-components';

const MessageBase: React.StatelessComponent<BaseStyled> = props => (
  <div {...props}>
    {props.children}
  </div>
);
export const Message = styled(MessageBase)`
    font-size: 18px;
    margin-top: 0;
    color: ${props => props.theme.color.text};
    font-family: ${props => props.theme.font.futura};
    line-height: 30px;
`;

const ConfettiBase: React.StatelessComponent<ConfettiProps> = props => <img {...props} />;
export const Confetti = styled(ConfettiBase)`
    width: 22px;
`;

interface ConfettiProps extends React.ImgHTMLAttributes<any>, BaseStyled {}
