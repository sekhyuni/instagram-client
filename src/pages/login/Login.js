import { useState } from 'react';
import Footer from '../../layouts/footer/Footer';
import doAxiosRequest from '../../functions/doAxiosRequest';
import * as S from './Login.styled';

const Login = ({ onChangeAuth }) => {
    return (
        <S.Section>
            <S.Main>
                <S.Article>
                    <S.Div>
                        <S.ImageOfInstagramMain src={require('../../assets/instagram_main.png')} />
                    </S.Div>
                    <S.Div>
                        <Form onChangeAuth={onChangeAuth} />
                    </S.Div>
                </S.Article>
            </S.Main>
            <Footer />
        </S.Section>
    );
};

const Form = ({ onChangeAuth }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <S.DivOfLoginForm>
                <div>
                    <S.ImageOfInstagram src={require('../../assets/instagram_logo.png')}></S.ImageOfInstagram>
                </div>
                <S.Form onSubmit={event => {
                    event.preventDefault();

                    doAxiosRequest('POST', '/accounts/login', { id, password, })
                        .then(result => {
                            onChangeAuth(true);

                            alert(`Login ${result.data}`);
                            console.log(result);
                        }).catch(error => {
                            console.error(error);
                        });
                }}>
                    <S.Label>
                        <S.Span>전화번호, 사용자, 이름 또는 이메일</S.Span>
                        <S.Input type="text" value={id} onChange={event => { setId(event.target.value); }} />
                    </S.Label>
                    <S.Label>
                        <S.Span>비밀번호</S.Span>
                        <S.Input type="password" value={password} onChange={event => { setPassword(event.target.value); }} />
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
                    <S.Link to="/appdown/ios"><S.ImageOfAppDown type="IOS" src={require('../../assets/ios.png')} /></S.Link>
                    <S.Link to="/appdown/android"><S.ImageOfAppDown type="Android" src={require('../../assets/android.png')} /></S.Link>
                </S.DivForHorizontalItems>
            </S.DivOfAppDownForm>
        </>
    );
};

export default Login;