import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider/Slider"
import PlayList from "./components/PlayList/PlayList"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Slider />} path="/slider" /> {/*remember to cut this */}
          <Route element={<PlayList />} path="/playlist" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
