import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import ErrorPage from "./Pages/ErrorPage"
import TouristPlaces from "./Pages/TouristPlaces"
import Destination from "./Pages/Destination"
// import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states/:state/places" element={<TouristPlaces />} />
        <Route path="/states/:state/places/:place" element={<Destination />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
