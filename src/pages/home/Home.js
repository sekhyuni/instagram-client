import Footer from '../../layouts/footer/Footer';
import * as S from './Home.styled';

const Home = ({ onChangeAuth }) => {
    return (
        <S.Section>
            <S.Nav>
                <S.Link to="/"><S.ImageOfInstagram src={require('../../assets/instagram_logo.png')} /></S.Link>
                <div>
                    검색
                </div>
                <S.Div>
                    <div>링크 1</div>
                    <div>링크 2</div>
                    <div>링크 3</div>
                    <div>링크 4</div>
                    <div>링크 5</div>
                    <div><S.Link to="/" onClick={() => {
                        onChangeAuth(false);
                    }}>로그아웃</S.Link></div>
                </S.Div>
            </S.Nav>
            <S.Main>
                Home
                <div>게시글 1</div>
                <div>게시글 2</div>
                <div>게시글 3</div>
                <div>게시글 4</div>
                <div>게시글 5</div>
                <div>게시글 6</div>
            </S.Main>
            <Footer />
        </S.Section>
    );
};

export default Home;