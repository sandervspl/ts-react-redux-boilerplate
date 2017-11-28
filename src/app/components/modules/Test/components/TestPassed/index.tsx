import * as React from 'react';
import * as cssModules from 'react-css-modules';
import * as styles from './styles.css';

import * as confetti from 'images/confetti.png';

/*
 * __NOTE: Component without props
 */
const TestPassed: React.StatelessComponent = () => (
    <div>
        <p styleName="message">
            The boilerplate is successfully installed, you&apos;re ready to start.
            <img src={confetti} styleName="confetti" alt="confetti" />
        </p>
        <p styleName="message">Good Luck!</p>
    </div>
);

export default cssModules(styles)(TestPassed);
