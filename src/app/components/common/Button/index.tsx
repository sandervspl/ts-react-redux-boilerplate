import * as React from 'react';
import { Element } from './styled';
import { IButtonProps } from './types';

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
