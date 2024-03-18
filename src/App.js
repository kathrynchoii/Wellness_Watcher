import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import BMI from './components/BMI';
import BMR from './components/bmr';
import Workouts from './components/Workouts';
import About from './components/About'; 

function App() {
    useEffect(() => {
        document.title = 'BMR APP';
    }, []);

    return (
        <Router> 
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/homepage" replace />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/BMR" element={<BMR />} /> 
                    <Route path="/BMI" element={<BMI />} />
                    <Route path="/Workouts" element={<Workouts />} />
                    <Route path="/about" element={<About />} /> 
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
