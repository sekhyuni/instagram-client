import { Link as Link_ } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

export const Article = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 32px 0 0 0;
    padding: 0 0 32px 0;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`;

export const DivForHorizontalItems = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DivOfLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; // Vertical일 때, Items 세로축 정렬
    align-items: center;
    width: 100%;
    height: 396px;
    border: 1px solid #dbdbdb;
    border-radius: 1px;
    margin: 0 0 10px 0;
    background-color: #fff;
`;

export const DivOfJoinForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 63px;
    border: 1px solid #dbdbdb;
    border-radius: 1px; 
    background-color: #fff;
`;

export const DivOfAppDownForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; // Vertical일 때, Items 가로축 정렬
    width: 100%;
    height: 102px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center; // Vertical일 때, Items 가로축 정렬
    width: 348px;
    height: 265px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 268px;
    height: 38px;
    margin: 0 0 6px 0;
`;

export const Span = styled.span`
    color: #8e8e8e;
    font-size: 10px;
    line-height: 20px;
    margin: 0 0 0 7px;
    position: absolute;
`;

export const Input = styled.input`
    height: 100%;
    background-color: #fafafa;
    border: 1px solid;
    border-color: #dbdbdb;
    border-radius: 3px;
`;

export const Button = styled.button`
    width: 268px;
    height: 30px;
    color: #fff;
    background-color: #0095f6;
    border: 1px solid;
    border-color: #0095f6;
    border-radius: 4px;
    margin: 8px 0 8px 0;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const ImageOfInstagramMain = styled.img`
    width: 250px;
    height: 540px;
`;

export const DivOfImageWrapper = styled.div`

`;

export const ImageOfInstagram = styled.img`
    width: 175px;
    height: 51px;
    margin: 36px 0 12px 0;
    flex: 1;
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
    color: #0095f6;
    font-weight: bold;
    text-decoration: none;
`;