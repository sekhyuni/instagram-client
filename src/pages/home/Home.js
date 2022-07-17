import Footer from '../../layouts/footer/Footer';
import * as S from './Home.styled';

const Home = () => {
    return (
        <S.Section>
            <S.Nav>
                <S.Link to="/"><S.ImageOfInstagram src={require('../../assets/instagram_logo.png')} /></S.Link>
                <div>
                    검색
                </div>
                <S.Div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </S.Div>
            </S.Nav>
            <S.Main>
                Home
                <div>게시글1</div>
                <div>게시글2</div>
                <div>게시글3</div>
                <div>게시글4</div>
                <div>게시글5</div>
                <div>게시글6</div>
            </S.Main>
            <Footer />
        </S.Section>
    );
};

export default Home;