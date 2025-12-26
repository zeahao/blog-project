
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="content-container">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App