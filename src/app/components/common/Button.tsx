import * as React from 'react';
import styled, { BaseStyled } from 'styled-components';
import { StyledComponent } from 'app/services';

const Button = styled(StyledComponent<ButtonProps>('button'))`
    background: ${props => props.theme.color.primary};
    padding: 10px 20px;
    border: none;
    color: ${props => props.theme.color.white};
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: ${props => props.theme.font.futura};
`;

// PropTypes as interface
export interface ButtonProps extends BaseStyled, React.ButtonHTMLAttributes<HTMLButtonElement> {}

// default props with interface as blueprint for this object
const defaultProps: ButtonProps = {};

// apply default props to Button
Button.defaultProps = defaultProps;

export default Button;
