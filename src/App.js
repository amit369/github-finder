import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom'; 
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" elnt={<Home/>} /> */}
          <Route exact path="/about" element={<About/>} /> 
          {/* <Route exact path="/user/:login" element={<User/>} /> */}
          <Route element={<NotFound />} />
            </Routes>
     </Router>
    </div>
  );
}

export default App;
