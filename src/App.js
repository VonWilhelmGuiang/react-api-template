import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

// components here
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes path="/" >
                    <Route path="" element={<Login/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="dashboard" element={<Dashboard/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
