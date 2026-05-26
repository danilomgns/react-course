import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ChekoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<ChekoutPage />} />
    </Routes>
  )
}

export default App
