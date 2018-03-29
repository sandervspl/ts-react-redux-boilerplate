import styled from 'styled-components';

export const Message = styled.div`
    font-size: 18px;
    margin-top: 0;
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.futura};
    line-height: 30px;
`;

export const Confetti = styled.img`
    width: 22px;
`;
