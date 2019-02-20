import styled from 'styled-components';
import LogoIcon from 'vectors/logo.svg';

export const Section = styled.section`
    text-align: center;
`;

export const LogoIconWrapper = styled(LogoIcon)`
    width: 200px;
    display: block;
    margin: 0 auto;
`;

export const Message = styled.div`
    font-size: 18px;
    margin-top: 0;
    color: ${(props) => props.theme.color.text};
    font-family: ${(props) => props.theme.font.futura};
    line-height: 30px;
`;

export const Confetti = styled.img`
    width: 22px;
`;
