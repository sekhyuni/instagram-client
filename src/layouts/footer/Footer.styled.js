import { Link as Link_ } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: row; // default;
    justify-content: center;
    height: 157px;
    padding: 0 16px 0 16px;
`;

export const FooterElement = styled.div`
    color: #8e8e8e;
    margin: 0 8px 0 8px;
    font-size: 12px;
`;

export const Link = styled(Link_)`
    text-decoration: none;
`;