import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider/Slider"
import PlayList from "./components/PlayList/PlayList"
import Login from "./components/User/Login/Login"
import Register from "./components/User/Register/Register"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Slider />} path="/slider" /> {/*remember to cut this */}
          <Route element={<PlayList />} path="/playlist" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
