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

export const Main = styled.main`
    ${Vertical}
`;

export const Article = styled.article`
    display: flex;
    justify-content: center;
    margin: 32px 0 0 0;
    padding: 0 0 32px 0;
`;

export const Div = styled.div`
    ${Vertical}
    width: 350px;
`;

export const DivForHorizontalItems = styled.div`
    display: flex;
`;

export const DivOfLoginForm = styled.div`
    ${Vertical}
    ${Center}
    width: 100%;
    height: 396px;
    border: 1px solid #dbdbdb;
    border-radius: 1px;
    margin: 0 0 10px 0;
    background-color: #fff;
`;

export const DivOfJoinForm = styled.div`
    display: flex;
    ${Center}
    width: 100%;
    height: 63px;
    border: 1px solid #dbdbdb;
    border-radius: 1px; 
    background-color: #fff;
`;

export const DivOfAppDownForm = styled.div`
    ${Vertical}
    align-items: center; // Vertical일 때, Items 가로축 정렬
    width: 100%;
    height: 102px;
`;

export const Form = styled.form`
    ${Vertical}
    align-items: center; // Vertical일 때, Items 가로축 정렬
    width: 348px;
    height: 265px;
`;

export const Label = styled.label`
    ${Vertical}
    width: 268px;
    height: 38px;
    margin: 0 0 6px 0;
`;

export const Span = styled.span`
    position: absolute;
    margin: 0 0 0 7px;
    font-size: 10px;
    line-height: 20px;
    color: #8e8e8e;
`;

export const Input = styled.input`
    height: 100%;
    border: 1px solid;
    border-radius: 3px;
    border-color: #dbdbdb;
    background-color: #fafafa;
`;

export const Button = styled.button`
    width: 268px;
    height: 30px;
    border: 1px solid;
    border-radius: 4px;
    border-color: #0095f6;
    margin: 8px 0 8px 0;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #0095f6;
    cursor: pointer;
`;

export const ImageOfInstagramMain = styled.img`
    width: 250px;
    height: 540px;
`;

export const ImageOfInstagram = styled.img`
    flex: 1;
    width: 175px;
    height: 51px;
    margin: 36px 0 12px 0;
`;

export const ImageOfAppDown = styled.img`
    flex: 1;
    width: 136px;
    height: 40px;
    margin: ${props => props.type === 'IOS' ? '0 4px 0 0' : '0 0 0 4px'};
`;

export const P = styled.p`
    font-size: 14px;
`;

export const Link = styled(Link_)`
    font-weight: bold;
    text-decoration: none;
    color: #0095f6;
`;