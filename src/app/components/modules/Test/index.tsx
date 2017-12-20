import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'services/styled-components';

import { IReduxStore } from 'app/ducks';
import { Dispatcher } from 'ducks/types';
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

export interface IHomeProps extends ITestState {
    install: Dispatcher;
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
