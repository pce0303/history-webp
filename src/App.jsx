import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Era from './pages/Era'
import Detail from './pages/Detail'
import Nav from './components/nav'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path=':era' element={<Era />} />
        <Route path=':title' element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App
