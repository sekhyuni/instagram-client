import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthorized ? <Home onChangeAuth={setIsAuthorized} /> : <Login onChangeAuth={setIsAuthorized} />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;