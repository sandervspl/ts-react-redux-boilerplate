import * as i from 'types';
import * as React from 'react';
import { connect } from 'react-redux';

import { install } from 'ducks/test';

import { Button } from 'common';
import { TestPassed } from './components';
import { LogoIconWrapper, Section } from './components/styled';

const Test: React.FC<HomeProps> = ({ test, ...props }) => (
  <Section>
    <LogoIconWrapper/>
    {test.passed ? (
      <TestPassed/>
    ) : (
      <Button onClick={props.install}>
        {test.loading ? 'Installing ...' : 'Test installation'}
      </Button>
    )}
  </Section>
);

const mapStateToProps: i.MapStateToProps = (state) => ({
  test: state.test,
});

export interface HomeProps {
  test: i.TestState;
  install: i.InstallAction;
}

export default connect(mapStateToProps, { install })(Test);
