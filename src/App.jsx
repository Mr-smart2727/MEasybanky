// import '.App.css'
import Navbar from './components/Narbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>

        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App