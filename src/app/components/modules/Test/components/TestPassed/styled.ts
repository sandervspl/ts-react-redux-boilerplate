import styled from 'services/styled-components';

export const Message = styled.div`
    font-size: 18px;
    margin-top: 0;
    color: ${props => props.theme.color.text};
    font-family: ${props => props.theme.font.futura};
    line-height: 30px;
`;

export const Confetti = styled.img`
    width: 22px;
`;
