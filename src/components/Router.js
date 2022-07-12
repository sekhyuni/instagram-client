import { Routes, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import About from '../layouts/About';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default Router;