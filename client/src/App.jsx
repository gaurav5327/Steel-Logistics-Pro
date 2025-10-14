import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Optimization from './components/Optimization';
import Predictions from './components/Predictions';
import WhatIfAnalysis from './components/WhatIfAnalysis';
import DataUpload from './components/DataUpload';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/optimization" element={<Optimization />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/what-if-analysis" element={<WhatIfAnalysis />} />
        <Route path="/data-upload" element={
          <ProtectedRoute>
            <DataUpload />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
