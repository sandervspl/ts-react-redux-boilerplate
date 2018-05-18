import * as React from 'react';
import styled, { BaseStyled } from 'styled-components';
import { PropChildrenAll } from 'services/types';

const ButtonBase: React.StatelessComponent<ButtonProps> = props => (
  <button {...props}>
    {props.children}
  </button>
);

const Button = styled(ButtonBase)`
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
export interface ButtonProps extends BaseStyled {
  children?: PropChildrenAll;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
}

// default props with interface as blueprint for this object
const defaultProps: ButtonProps = {
  children: null,
  disabled: false,
  onClick: () => {},
  type: 'button',
};

// apply default props to Button
ButtonBase.defaultProps = defaultProps;

export default Button;
