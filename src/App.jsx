//Use For Page Navigation react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About' 
import Reviews from './components/Reviews' 
import Contact from './components/Contact' 
import FoodMenu from './components/FoodMenu' 
import Footer from './components/Footer'
import ScrollToTop from './components/ScrolltoTop'
import FoodpandaButton from './components/fp'




export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/foodmenu" element={<FoodMenu/>} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contactus" element={<Contact/>} />
          </Routes>
        </div>
        <FoodpandaButton />
        <Footer />
      </div>
    </Router>
  )
}
