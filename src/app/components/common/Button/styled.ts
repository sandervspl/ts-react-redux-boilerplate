import styled from 'services/styled-components';

export const Element = styled.button`
    background: ${props => props.theme.color.primary};
    padding: 10px 20px;
    border: none;
    color: ${props => props.theme.color.white};
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: ${props => props.theme.font.futura};
`;
