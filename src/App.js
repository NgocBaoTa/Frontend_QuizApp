import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Login /> */}
      <Register />
=======
      <Routes>
        <Route path="/user/login" element={<Login />} />
      </Routes>
>>>>>>> 4adee82de33ff65171cf1cfc17984b14a431e2cc
    </div>
  );
}

export default App;