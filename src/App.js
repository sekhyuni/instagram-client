import Main from './layouts/Main';
import Footer from './layouts/Footer';
import styled from 'styled-components';

const App = () => {
  return (
    <StyledApp>
      <section>
        <Main />
        <Footer />
      </section>
    </StyledApp >
  );
};

const StyledApp = styled.div`
    text-align: center;
`;

export default App;
