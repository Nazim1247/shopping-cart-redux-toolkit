
import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <> 
    <nav className='max-w-6xl mx-auto'>Navbar</nav>
    <main className='max-w-6xl mx-auto'>
      <Outlet/>
    </main>
    </>
  )
}

export default App
