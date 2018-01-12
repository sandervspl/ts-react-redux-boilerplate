import * as React from 'react';
import { connect } from 'react-redux';

import { install } from 'ducks/modules/test';

import Button from 'common/Button';
import { LogoIconWrapper, Section } from './styled';
import TestPassed from './components/TestPassed';

import { HomeProps } from './types';
import { ReduxStore } from 'app/ducks';

const Test: React.StatelessComponent<HomeProps> = (props: HomeProps) => (
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

const mapStateToProps = (store: ReduxStore) => ({
    test: store.test,
});

export default connect(mapStateToProps, { install })(Test);
