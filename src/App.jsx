
import './App.css'
import Banner from './Components/Banner'
import Features from './Components/Features'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import QuickList from './Components/QuickList'
import SomeFacts from './Components/SomeFacts'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
          <NavBar></NavBar>
          <Banner></Banner>
          <QuickList></QuickList>
          <Features></Features>
          <SomeFacts></SomeFacts>
          <Footer></Footer>
        </div>     

    </>
  )
}

export default App
