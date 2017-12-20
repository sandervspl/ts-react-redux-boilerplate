import * as React from 'react';
import { connect } from 'react-redux';

import { install } from 'ducks/modules/test';

import Button from 'common/Button';
import { LogoIconWrapper, Section } from './styled';
import TestPassed from './components/TestPassed';

import { IHomeProps } from './types';
import { IReduxStore } from 'app/ducks';

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
