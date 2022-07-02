import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <StyledFooter>
                <h1>This is Footer</h1>
            </StyledFooter>
        </div>
    );
};

const StyledFooter = styled.footer`
    bottom: 0;
    position: fixed;
    width: 100%;
    background-color: grey;
`;

export default Footer;