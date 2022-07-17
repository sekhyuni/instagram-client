import * as S from './Footer.styled';

const footerMenus = [
    { id: 1, link: '/about/meta', value: 'Meta', },
    { id: 2, link: '/about', value: '소개', },
    { id: 3, link: '/about/blog', value: '블로그', },
    { id: 4, link: '/about/jobs', value: '채용 정보', },
    { id: 5, link: '/help', value: '도움말', },
    { id: 6, link: '/api', value: 'API', },
    { id: 7, link: '/legal/privacy', value: '개인정보처리방침', },
    { id: 8, link: '/legal/terms', value: '약관', },
    { id: 9, link: '/directory/profiles', value: '인기 계정', },
    { id: 10, link: '/hashtags', value: '해시 태그', },
    { id: 11, link: '/explore/locations', value: '위치', },
    { id: 12, link: '/lite', value: 'Instagram Lite', },
    { id: 13, link: '/help/instagram', value: '연락처 업로드 & 비사용자', },
];

const Footer = () => {
    const footerElements = footerMenus
        .map(footerMenu =>
            <S.Link key={footerMenu.id} to={footerMenu.link}>
                <S.FooterElement>{footerMenu.value}</S.FooterElement>
            </S.Link>)
        .reduce((prev, curr) => prev === null ? [curr] : [...prev, curr], null);

    return (
        <S.Footer>
            <S.FooterTopElementWrapper>
                {footerElements}
            </S.FooterTopElementWrapper>
            <S.FooterBottomElementWrapper>
                <S.FooterElement>
                    한국어
                </S.FooterElement>
                <S.FooterElement>
                    © 2022 Instagram from Meta
                </S.FooterElement>
            </S.FooterBottomElementWrapper>
        </S.Footer>
    );
};

export default Footer;