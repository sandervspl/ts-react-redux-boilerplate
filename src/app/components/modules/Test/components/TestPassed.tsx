import * as React from 'react';
import styled from 'services/styled-components';

import * as confetti from 'images/confetti.png';

const Message = styled.div`
    font-size: 18px;
    margin-top: 0;
    color: ${props => props.theme.color.text};
    font-family: ${props => props.theme.font.futura};
    line-height: 30px;
`;

const Confetti = styled.img`
    width: 22px;
`;

const TestPassed: React.StatelessComponent = () => (
    <div>
        <Message>
            The boilerplate is successfully installed, you&apos;re ready to start.
            <Confetti src={confetti} alt="confetti" />
        </Message>
        <Message>Good Luck!</Message>
    </div>
);

export default TestPassed;
