import * as React from 'react';
import styled from 'services/styled-components';

import { propChildrenAll } from 'services/customTypes';

const Element = styled.button`
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

export interface IButtonProps {
    children?: propChildrenAll;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}

const defaultProps: IButtonProps = {
    children: null,
    disabled: false,
    onClick: () => {},
    type: 'button',
};

const Button: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => (
    <Element
        disabled={props.disabled}
        type={props.type}
        onClick={props.onClick}
    >
        {props.children}
    </Element>
);

Button.defaultProps = defaultProps;

export default Button;
