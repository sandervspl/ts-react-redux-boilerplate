import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IReduxStore } from 'app/ducks';
import { dispatcher } from 'ducks/interfaces';
import { install, ITestState } from 'ducks/test';

import LogoIcon from 'vectors/logo.svg';
import Button from 'common/Button';
import TestPassed from './components/TestPassed';

const Section = styled.section`
    text-align: center;
`;

// Extend LogoIcon component with styling
const LogoIconWrapper = styled(LogoIcon)`
    width: 200px;
    display: block;
    margin: 0 auto;
`;

/*
 * __NOTE: extending redux state interface to props
 * Because we are connecting the Test redux store to our component, we can extend our component props interface
 * with that of the Test redux store interface.
 * Now this props interface will also contain "passed", "loading", and "error".
 */
export interface IHomeProps extends ITestState {
    install: dispatcher;
}

const Test: React.StatelessComponent<IHomeProps> = (props: IHomeProps) => (
    <Section>
        <LogoIconWrapper />
        {props.test.passed ? (
            <TestPassed />
        ) : (
            <Button onClick={props.install}>
                {props.test.loading ? 'Installing ...' : 'Test installation'}
            </Button>
        )}
    </Section>
);

const mapStateToProps = (store: IReduxStore) => ({
    test: store.test,
});

export default connect(mapStateToProps, { install })(Test);
