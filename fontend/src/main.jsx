import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BeamToBeamEndPlate from './routes/beamToBeamEndPlate/beamToBeamEndPlate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/beamToBeamEndPlate" element={<BeamToBeamEndPlate />} />
      </Routes>
    </Router>
  </StrictMode>,
)
