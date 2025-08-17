import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<div>Products Page</div>} />
      <Route path="/cart" element={<div>Cart Page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
   </Provider>
  </StrictMode>,
)
