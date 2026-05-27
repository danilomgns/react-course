import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ChekoutPage } from './pages/checkout/CheckoutPage';
import { Orders } from './pages/OrdersPage';
import { Tracking } from './pages/TrackingPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<ChekoutPage />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App
