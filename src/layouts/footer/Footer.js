import * as S from './Footer.styled';

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
        <S.Link key={footerMenu.id} to={footerMenu.link}>
            <S.FooterElement>{footerMenu.value}</S.FooterElement>
        </S.Link>
    ).reduce((prev, curr) => prev === null ? [curr] : [...prev, curr], null);

    console.log(footerElements);

    return (
        <S.Footer>
            {footerElements}
        </S.Footer>
    );
};

export default Footer;