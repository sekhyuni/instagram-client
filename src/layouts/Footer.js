import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <StyledFooter>
            <Link to='/Meta' style={{ textDecoration: 'none' }}><StyledFooterElement>Meta</StyledFooterElement></Link>
            <Link to='/intro' style={{ textDecoration: 'none' }}><StyledFooterElement>소개</StyledFooterElement></Link>
            <StyledFooterElement>블로그</StyledFooterElement>
            <StyledFooterElement>채용 정보</StyledFooterElement>
            <StyledFooterElement>도움말</StyledFooterElement>
            <StyledFooterElement>API</StyledFooterElement>
            <StyledFooterElement>개인정보처리방침</StyledFooterElement>
            <StyledFooterElement>약관</StyledFooterElement>
            <StyledFooterElement>인기 계정</StyledFooterElement>
            <StyledFooterElement>해시 태그</StyledFooterElement>
            <StyledFooterElement>위치</StyledFooterElement>
            <StyledFooterElement>Instagram Lite</StyledFooterElement>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    bottom: 12px;
    position: fixed;
    width: 100%;
`;

const StyledFooterElement = styled.div`
    display: inline;
    color: #8e8e8e;
    margin: 0 8px 0 8px;
    font-size: 12px;
`;

export default Footer;