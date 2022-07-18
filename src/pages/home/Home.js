import Footer from '../../layouts/footer/Footer';
import * as Svg from '../../components/svg/Svg';
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
                    <S.NavMenuWrapper>
                        <Svg.Home />
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <Svg.Airplane />
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <Svg.Plus />
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <Svg.Compass />
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <Svg.Heart />
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <S.Link to="/" onClick={() => { onChangeAuth(false); }}>
                            <span>
                                <S.Img src={require('../../assets/sekhyuni.jpeg')} />
                            </span>
                        </S.Link>
                    </S.NavMenuWrapper>
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