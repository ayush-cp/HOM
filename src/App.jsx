import './App.css'
import Landing from './components/Landing'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from './components/Users';
import Navbar from './components/Navbar';

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/users' element={<Users />} />
        </Routes>
      </Router>
  )
}

export default App
