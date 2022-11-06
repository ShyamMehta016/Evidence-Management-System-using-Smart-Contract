import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Police from './pages/Police';
import Public from './pages/Public';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/police" element={<Police />} />
                <Route path="/public" element={<Public />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
