import { Link as Link_ } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Vertical = css`
    display: flex;
    flex-direction: column;
`;

const Center = css`
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
    ${Vertical}
    align-items: center;
    height: 102px;
    padding: 0 16px 0 16px;
`;

export const FooterTopElementWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 23px;   
`;

export const FooterBottomElementWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 11px;   
    margin: 12px 0 12px 0;
`;

export const FooterElement = styled.div`
    margin: 0 8px 0 8px;
    color: #8e8e8e;
    font-size: 12px;
`;

export const Link = styled(Link_)`
    height: 11px;
    text-decoration: none;
`;