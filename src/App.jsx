import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar'
import Portfolio from "./Components/Portfolio/Portfolio";





export default function App() {
  return (
    <>

    <Router>
      <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container">
            <Link className="navbar-brand fw-bolder" to="/">
              START Framework
            </Link>
            <button
              className="navbar-toggler display-flex align-items-center p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu <i className="fa-solid fa-bars fa-sm"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li>
                  <Link
                    to="/portfolio"
                    className="nav-link active fw-bolder my-4  p-3"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link fw-bolder my-4 p-3">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link fw-bolder my-4 p-3">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>

      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
      </Router>

   
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Portfolio /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />

      
      

      
      
     
    
     
    
    </>
  )
}


