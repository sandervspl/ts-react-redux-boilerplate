import * as React from 'react';
import { connect } from 'react-redux';

import { install } from 'ducks/modules/test';

import { Button } from 'components/common';
import { LogoIconWrapper, Section } from './styled';
import { TestPassed } from './components';

import { HomeProps } from './types';
import { ReduxState } from 'app/ducks';

const Test: React.StatelessComponent<HomeProps> = (props: HomeProps) => (
  <Section>
    <LogoIconWrapper/>
    {props.test.passed ? (
      <TestPassed/>
    ) : (
      <Button onClick={props.install}>{props.test.loading ? 'Installing ...' : 'Test installation'}</Button>
    )}
  </Section>
);

const mapStateToProps = (store: ReduxState) => ({
  test: store.test,
});

export default connect(mapStateToProps, { install })(Test);
