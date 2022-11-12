import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import File from '../pages/File';
import Update from '../pages/Update'
import Close from '../pages/Close';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/update' element={<Update />} />
                <Route path="/file" element={<File />} />
                <Route path="/close" element={<Close />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
