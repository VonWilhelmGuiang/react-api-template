import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

// components here
import Login from './pages/Login';
import Register from './pages/Register'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes path="/" >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
