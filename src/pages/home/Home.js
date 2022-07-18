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
                        <S.Link to="/">
                            <Svg.Home />
                        </S.Link>
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <S.Link to="/direct">
                            <Svg.Airplane />
                        </S.Link>
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <S.Link to="/">
                            <Svg.Plus />
                        </S.Link>
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <S.Link to="/explore">
                            <Svg.Compass />
                        </S.Link>
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <S.Link to="/">
                            <Svg.Heart />
                        </S.Link>
                    </S.NavMenuWrapper>
                    <S.NavMenuWrapper>
                        <S.Link to="/" onClick={() => { onChangeAuth(false); }}>
                            <S.Span>
                                <S.Img src={require('../../assets/sekhyuni.jpeg')} />
                            </S.Span>
                        </S.Link>
                    </S.NavMenuWrapper>
                </S.Div>
            </S.Nav>
            <S.Main>
                <section>
                    <div>
                        <S.HeaderOfContent>
                            HeaderOfContent
                        </S.HeaderOfContent>
                        <S.MainOfContent>
                            MainOfContent
                        </S.MainOfContent>
                    </div>
                    <div>

                    </div>
                </section>
            </S.Main>
            <Footer />
        </S.Section>
    );
};

export default Home;