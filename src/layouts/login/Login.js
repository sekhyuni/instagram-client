import doAxiosRequest from '../../functions/doAxiosRequest';
import * as S from './Login.styled';

const Form = () => {
    return (
        <>
            <S.DivOfLoginForm>
                <div>
                    <S.ImageOfInstagram src={require('../../assets/instagram_logo.png')}></S.ImageOfInstagram>
                </div>
                <S.Form id="loginForm" method="post" onSubmit={event => {
                    event.preventDefault();
                    const [id, password] = event.target;

                    console.log(doAxiosRequest('POST', '/accounts/login', { id: id.value, password: password.value }));
                }}>
                    <S.Label>
                        <S.Span>전화번호, 사용자, 이름 또는 이메일</S.Span>
                        <S.Input type="text" name="id" />
                    </S.Label>
                    <S.Label>
                        <S.Span>비밀번호</S.Span>
                        <S.Input type="password" name="password" />
                    </S.Label>
                    <S.Button type="submit">로그인</S.Button>
                </S.Form>
            </S.DivOfLoginForm>
            <S.DivOfJoinForm>
                <S.P>계정이 없으신가요? <S.Link to="/accounts/signup">가입하기</S.Link></S.P>
            </S.DivOfJoinForm>
            <S.DivOfAppDownForm>
                <S.P>앱을 다운로드하세요.</S.P>
                <S.DivForHorizontalItems>
                    <S.ImageOfAppDown type="IOS" src={require('../../assets/ios.png')}></S.ImageOfAppDown>
                    <S.ImageOfAppDown type="Android" src={require('../../assets/android.png')}></S.ImageOfAppDown>
                </S.DivForHorizontalItems>
            </S.DivOfAppDownForm>
        </>
    );
};

const Login = () => {
    return (
        <S.Main>
            <S.Article>
                <S.Div>
                    <S.ImageOfInstagramMain src={require('../../assets/instagram_main.png')}></S.ImageOfInstagramMain>
                </S.Div>
                <S.Div>
                    <Form />
                </S.Div>
            </S.Article>
        </S.Main>
    );
};

export default Login;