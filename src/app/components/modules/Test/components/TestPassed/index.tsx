import * as React from 'react';
import styled from 'styled-components';

import { color, font } from 'styles/variables';
import * as confetti from 'images/confetti.png';

const Message = styled.div`
    font-size: 18px;
    margin-top: 0;
    color: ${color.text};
    font-family: ${font.futura};
    line-height: 30px;
`;

const Confetti = styled.img`
    width: 22px;
`;

/*
 * __NOTE: Component without props
 */
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
