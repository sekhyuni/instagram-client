import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <h1>This is Header</h1>
                <StyledHeaderLink>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/about">소개</Link></li>
                    <li><Link to="/study">공부</Link></li>
                </StyledHeaderLink>
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    color: white;
    background-color: black;
`;

const StyledHeaderLink = styled.div`
    background-color: white;
`;

export default Header;