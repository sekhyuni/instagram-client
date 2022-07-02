import Router from './components/Router';
import Footer from './layouts/Footer';
import styled from 'styled-components';

const App = () => {
  return (
    <StyledApp>
      <Router />
      <Footer />
    </StyledApp >
  );
};

const StyledApp = styled.div`
    text-align: center;
`;

export default App;
