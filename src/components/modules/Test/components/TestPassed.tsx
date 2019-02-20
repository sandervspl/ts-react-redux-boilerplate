import * as React from 'react';
import * as confettiImg from 'images/confetti.png';

import { Message, Confetti } from './styled';

const TestPassed: React.StatelessComponent = () => (
  <div>
    <Message>
      The boilerplate is successfully installed, you&apos;re ready to start.
      <Confetti src={confettiImg} alt="confetti"/>
    </Message>
    <Message>Good Luck!</Message>
  </div>
);

export default TestPassed;
