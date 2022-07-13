import styled from 'styled-components';
import { Link } from 'react-router-dom';

const footerMenus = [
    { id: 1, link: '/meta', value: 'Meta', },
    { id: 2, link: '/intro', value: '소개', },
    { id: 3, link: '/blog', value: '블로그', },
    { id: 4, link: '/recruit', value: '채용 정보', },
    { id: 5, link: '/help', value: '도움말', },
    { id: 6, link: '/api', value: 'API', },
    { id: 7, link: '/info', value: '개인정보처리방침', },
    { id: 8, link: '/terms', value: '약관', },
    { id: 9, link: '/popolur', value: '인기 계정', },
    { id: 10, link: '/hashtag', value: '해시 태그', },
    { id: 11, link: '/position', value: '위치', },
    { id: 12, link: '/lite', value: 'Instagram Lite', },
];

const Footer = () => {
    const footerElements = footerMenus.map(footerMenu =>
        <Link key={footerMenu.id} to={footerMenu.link} style={{ textDecoration: 'none' }}><StyledFooterElement>{footerMenu.value}</StyledFooterElement></Link>
    ).reduce((prev, curr) => prev === null ? [curr] : [...prev, curr], null);

    console.log(footerElements);

    return (
        <StyledFooter>
            {footerElements}
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row; // default;
    justify-content: center;
    height: 157px;
    padding: 0 16px 0 16px;
`;

const StyledFooterElement = styled.div`
    display: inline;
    color: #8e8e8e;
    margin: 0 8px 0 8px;
    font-size: 12px;
`;

export default Footer;