//  App.jsx


import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayList from './components/PlayList/PlayList';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
// import PrivateRoute from './components/private/Private.jsx'; // Renamed for clarity
import Slider from './components/Slider/Slider.jsx';
import User from './components/User/Admin/User.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes (Accessible to everyone) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (Require Authentication) in further development we are going to use this  */}
        {/* <Route element={<PrivateRoute />}>
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route element={<Slider />} path="/slider" />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/profile" element={<h1>hello this is my profile</h1>} /> {/* Replace with a Profile component */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
