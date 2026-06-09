import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Legal from './Pages/Legal'
import NotFound from './Pages/NotFound'
import Appointment from './Pages/Appointment'

function App() {
  // Ponlos aquí mero, antes de que empiece la estructura visual:
  console.log('🟢 [LOG]: Cargando el componente principal App.js')
  console.info('ℹ️ [INFO]: Inicializando el enrutador de la aplicación...')
  console.error('❌ [ERROR]: Esto es una simulación de error en la raíz.')

  return (
    <div className="App">
      <Router basename="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
