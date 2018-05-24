import * as i from 'app/interfaces';
import * as React from 'react';
import { connect } from 'react-redux';

import { install } from 'ducks/modules/test';

import { Button } from 'components/common';
import { LogoIconWrapper, Section } from './styled';
import { TestPassed } from './components';

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

const mapStateToProps = (store: i.ReduxState) => ({
  test: store.test,
});

export interface HomeProps extends i.TestState {
  install: i.Dispatcher;
}

export default connect(mapStateToProps, { install })(Test);
