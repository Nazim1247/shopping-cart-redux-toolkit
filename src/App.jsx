
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div> 
    <Navbar />
    <main className='max-w-6xl mx-auto'>
      <Outlet/>
    </main>
    </div>
  )
}

export default App
