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

export const Section = styled.section`
    ${Vertical}
    height: 100%;
    background-color: #fafafa;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
`;

export const Main = styled.main`
    ${Vertical}
    align-items: center;
`;

export const Div = styled.div`
    display: flex;
`;

export const ImageOfInstagram = styled.img`
    width: 103px;
    height: 29px;
`;

export const Link = styled(Link_)`

`;