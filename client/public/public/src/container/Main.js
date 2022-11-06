import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import File from '../pages/File';
import Status from '../pages/Status';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/file" element={<File />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
