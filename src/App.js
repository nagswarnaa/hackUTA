import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from './main-container/main-container';
import SignIn from './login/login';
import About from './main-container/about';
import Navbar from './main-container/navbar';
import SignUp from './signup/signup';
import RegisterClasses from './register-classes/registerClasses';
import Classes from './register-classes/listOfCourses';
import Attendance from './main-container/attendance';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/registercls" element={<RegisterClasses />} />
        <Route path="/cls" element={<Classes />} />
        <Route path="/attn" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;
