import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as cssModules from 'react-css-modules';

import { IReduxStore } from 'app/ducks';
import { install, ITestState } from 'ducks/test';

import LogoIcon from 'vectors/logo.svg';
import Button from 'common/Button';
import TestPassed from './components/TestPassed';

import * as styles from './styles.css';

/*
 * __NOTE: extending redux state interface to props
 * Because we are connecting the Test redux store to our component, we can extend our component props interface
 * with that of the Test redux store interface.
 * Now this props interface will also contain "passed", "loading", and "error".
 */
export interface IHomeProps extends ITestState {
    install: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Test: React.StatelessComponent<IHomeProps> = (props: IHomeProps) => (
    <section styleName="test">
        <LogoIcon styleName="logo" />
        {props.test.passed ? (
            <TestPassed />
        ) : (
            <Button onClick={props.install}>
                {props.test.loading ? 'Installing ...' : 'Test installation'}
            </Button>
        )}
    </section>
);

const mapStateToProps = (store: IReduxStore) => {
    return {
        test: store.test,
    };
};

export default compose(
    connect(mapStateToProps, { install }),
    cssModules(styles),
)(Test);
