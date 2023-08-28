import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <div className=''>
      <Header/>
    </div>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App