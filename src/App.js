import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;