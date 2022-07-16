import styled from 'styled-components';
import Login from './layouts/login/Login';
import Footer from './layouts/footer/Footer';

const App = () => {
  return (
    <StyledSection>
      <Login />
      <Footer />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fafafa;
`;

export default App;
