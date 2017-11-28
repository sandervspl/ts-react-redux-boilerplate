import * as React from 'react';
import * as cssModules from 'react-css-modules';

import { propChildrenAll } from 'services/customTypes';
import * as styles from './styles.css';

export interface IButtonProps {
    children?: propChildrenAll; // '?' indicates optional
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}

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
    <button
        styleName="button"
        disabled={props.disabled}
        type={props.type}
        onClick={props.onClick}
    >
        {props.children}
    </button>
);

Button.defaultProps = defaultProps;

export default cssModules(styles)(Button);
