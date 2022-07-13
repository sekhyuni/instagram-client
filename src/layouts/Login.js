import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <>
            <StyledDivOfLoginForm>
                <StyledDivOfImageWrapper>
                    <ImageOfInstagram src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"></ImageOfInstagram>
                </StyledDivOfImageWrapper>
                <StyledForm id="loginForm" method="post" onSubmit={event => {
                    event.preventDefault();
                }}>
                    <Label>
                        <Span>전화번호, 사용자, 이름 또는 이메일</Span>
                        <Input type="text" name="id" />
                    </Label>
                    <Label>
                        <Span>비밀번호</Span>
                        <Input type="password" name="password" />
                    </Label>
                    <Button type="submit">로그인</Button>
                </StyledForm>
            </StyledDivOfLoginForm>
            <StyledDivOfJoinForm>
                <StyledP>계정이 없으신가요? <Link to="/accounts/signup" style={{ textDecoration: 'none', color: '#0095f6', fontWeight: 'bold' }}>가입하기</Link></StyledP>
            </StyledDivOfJoinForm>
            <StyledDivOfAppDownForm>
                <StyledP>앱을 다운로드하세요.</StyledP>
                <StyledDivForHorizontalItems>
                    <ImageOfAppDown type="IOS" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"></ImageOfAppDown>
                    <ImageOfAppDown type="Android" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"></ImageOfAppDown>
                </StyledDivForHorizontalItems>
            </StyledDivOfAppDownForm>
        </>
    );
};

const Login = () => {
    return (
        <StyledMain>
            <StyledArticle>
                <StyledDiv>
                    <ImageOfInstagramMain src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"></ImageOfInstagramMain>
                </StyledDiv>
                <StyledDiv>
                    <Form />
                </StyledDiv>
            </StyledArticle>
        </StyledMain>);
};

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
`;

const StyledArticle = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 32px 0 0 0;
    padding: 0 0 32px 0;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`;

const StyledDivForHorizontalItems = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledDivOfLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; // Vertical일 때, Items 세로축 정렬
    align-items: center;
    width: 100%;
    height: 396px;
    border: 1px solid #dbdbdb;
    border-radius: 1px;
    margin: 0 0 10px 0;
    background-color: #fff;
`;

const StyledDivOfJoinForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 63px;
    border: 1px solid #dbdbdb;
    border-radius: 1px; 
    background-color: #fff;
`;

const StyledDivOfAppDownForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; // Vertical일 때, Items 가로축 정렬
    width: 100%;
    height: 102px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center; // Vertical일 때, Items 가로축 정렬
    width: 348px;
    height: 265px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 268px;
    height: 38px;
    margin: 0 0 6px 0;
`;

const Span = styled.span`
    color: #8e8e8e;
    font-size: 10px;
    line-height: 20px;
    margin: 0 0 0 7px;
    position: absolute;
`;

const Input = styled.input`
    height: 100%;
    background-color: #fafafa;
    border: 1px solid;
    border-color: #dbdbdb;
    border-radius: 3px;
`;

const Button = styled.button`
    width: 268px;
    height: 30px;
    color: #fff;
    background-color: #0095f6;
    border: 1px solid;
    border-color: #0095f6;
    border-radius: 4px;
    margin: 8px 0 8px 0;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

const ImageOfInstagramMain = styled.img`
    width: 250px;
    height: 540px;
`;

const StyledDivOfImageWrapper = styled.div`

`;

const ImageOfInstagram = styled.img`
    width: 175px;
    height: 51px;
    margin: 36px 0 12px 0;
    flex: 1;
`;

const ImageOfAppDown = styled.img`
    flex: 1;
    width: 136px;
    height: 40px;
    margin: ${props => props.type === 'IOS' ? '0 4px 0 0' : '0 0 0 4px'};
`;

const StyledP = styled.p`
    font-size: 14px;
`;

export default Login;