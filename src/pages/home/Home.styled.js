import { Link as Link_ } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Vertical = css`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    ${Vertical}
    align-items: center; // 하위 Node의 크기가 fix되면 center를 잡아야 함
    height: 100%;
    background-color: #fafafa;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; // 하위 Node들이 끝에서부터 균일한 간격으로 벌어짐
    width: 100%;
    height: 60px;
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
    flex-direction: row;
    justify-content: center;
    height: 85px;
`;

export const MainOfContent = styled.div`
    ${Vertical}
    align-items: center;
    height: 100%;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavMenuWrapper = styled.div`
    display: flex; // 하위 Node가 하나여서 flex-direction은 뭐든 상관없음
    margin: 0 0 0 22px;
`;

export const Input = styled.input`
    width: 236px;
    height: 36px;
    border: 1px solid #efefef;
    border-radius: 8px;
    padding: 0 16px 0 16px;
    background-color: #efefef;
    font-size: 100%;
`;

export const ImageOfInstagram = styled.img`
    width: 103px;
    height: 29px;
`;

export const Link = styled(Link_)`
    display: flex; // 하위 Node가 하나여서 flex-direction은 뭐든 상관없음
    color: #000;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
`;

export const Span = styled.span`
    display: flex; // 하위 Node가 하나여서 flex-direction은 뭐든 상관없음
`;