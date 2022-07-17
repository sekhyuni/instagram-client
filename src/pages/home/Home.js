import Footer from '../../layouts/footer/Footer';
import * as S from './Home.styled';

const Home = ({ onChangeAuth }) => {
    return (
        <S.Section>
            <S.Nav>
                <S.Div>
                    <S.Link to="/"><S.ImageOfInstagram src={require('../../assets/instagram_logo.png')} /></S.Link>
                </S.Div>
                <S.Div>
                    <S.Input type="text" placeholder="검색" />
                </S.Div>
                <S.Div>
                    <S.NavMenuWrapper>링크 1</S.NavMenuWrapper>
                    <S.NavMenuWrapper>링크 2</S.NavMenuWrapper>
                    <S.NavMenuWrapper>링크 3</S.NavMenuWrapper>
                    <S.NavMenuWrapper>링크 4</S.NavMenuWrapper>
                    <S.NavMenuWrapper>링크 5</S.NavMenuWrapper>
                    <S.NavMenuWrapper><S.Link to="/" onClick={() => {
                        onChangeAuth(false);
                    }}>로그아웃</S.Link></S.NavMenuWrapper>
                </S.Div>
            </S.Nav>
            <S.Main>
                <S.HeaderOfContent>
                    HeaderOfContent
                </S.HeaderOfContent>
                <S.MainOfContent>
                    MainOfContent
                </S.MainOfContent>
            </S.Main>
            <Footer />
        </S.Section>
    );
};

export default Home;