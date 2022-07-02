import { Routes, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import About from '../layouts/About';
import Study from '../layouts/Study';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study" element={<Study />} />
        </Routes>
    );
};

export default Router;