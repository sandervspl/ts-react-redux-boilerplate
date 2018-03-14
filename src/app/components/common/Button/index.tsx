import * as React from 'react';
import { Element } from './styled';
import { ButtonProps } from './types';

const defaultProps: ButtonProps = {
    children: null,
    disabled: false,
    onClick: () => {},
    type: 'button',
};

const Button: React.StatelessComponent<ButtonProps> = (props: ButtonProps) => (
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
