import * as React from 'react';
import styled from 'styled-components';

import { color, font } from 'styles/variables';
import { propChildrenAll } from 'services/customTypes';

export interface IButtonProps {
    children?: propChildrenAll; // '?' indicates optional
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}

const Element = styled.button`
    background: ${color.primary};
    padding: 10px 20px;
    border: none;
    color: ${color.white};
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: ${font.futura};
`;

/*
 * Define default values for our props here.
 * We will give this object after we declare Button.
 * This keeps all props info grouped at the top.
 */
const defaultProps: IButtonProps = {
    children: null,
    disabled: false,
    onClick: () => {},
    type: 'button',
};

/*
 * __NOTE: declaring a component
 * Button is of type: React.StatelessComponent.
 * This type accepts an interface for its props. We give it the interface we created above.
 * The props that are passed are now linked to the interface.
 */
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
