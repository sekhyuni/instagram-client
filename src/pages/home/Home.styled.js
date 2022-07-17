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
    align-items: center;
    height: 100%;
    background-color: #fafafa;
`;

export const Nav = styled.nav`
    display: flex;
    ${Center}
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #dbdbdb;
    padding: 0 20px 0 20px;
    background-color: #fff;
`;

export const Main = styled.main`
    ${Vertical}
    width: 468px;
    height: 100%;
`;

export const HeaderOfContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 85px;
`;

export const MainOfContent = styled.div`
    ${Vertical}
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

export const NavMenuWrapper = styled.div`
    margin: 0 0 0 22px;
`;

export const Input = styled.input`
    width: 236px;
    height: 36px;
    padding: 0 16px 0 16px;
`;

export const ImageOfInstagram = styled.img`
    width: 103px;
    height: 29px;
`;

export const Link = styled(Link_)`
    ${Vertical}
    justify-content: center;
`;