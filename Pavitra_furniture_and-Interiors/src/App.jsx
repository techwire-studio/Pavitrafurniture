
import './App.css'
import About from './components/About'

import Contact from './components/Contact'
import Expertise from './components/Experties'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import Home from './components/Home'
import Projects from './components/Projects'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'


function App() {
  

  return (
    <div>
      <Home />
      <About />
      <Expertise />
      {/* <WhyChooseUs/> */}
      
      <Projects />
      <Testimonials />
      <Contact />
      <Subscribe />
      <Footer/>
      <Footer2 />
    </div>
  )
}

export default App
