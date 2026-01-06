import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { Routes, Route } from 'react-router-dom'
import Service from './pages/Service/Service'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'
import Clientele from './pages/Clientele/Clientele'
import Career from './pages/Career/Career'
import CareerDetail from './pages/CareerDetail/CareerDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post" element={<BlogPost />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/detail" element={<CareerDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
