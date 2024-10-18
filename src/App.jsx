import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Course from './pages/Course';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      <Routes>
        {/* Rute untuk Halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Rute untuk Halaman Formulir Pendaftaran */}
        <Route path="/register" element={<Register />} />

        {/* Tambahkan halaman lain jika perlu */}
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  </Router>
);
  
}

export default App
