import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';

const App: FC = () => {
    return (
        <div className="App">

            <Link to="/">Home</Link>{" "}
            <Link to="/login">Login</Link> {" "}
            <Link to="/contact">Contact</Link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;