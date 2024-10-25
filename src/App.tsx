import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;