import React  from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Podstatus from './components/podstatus/Podstatus'
import Footer from './components/footer/Footer'


const App = () => {
 
    return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Podstatus />
      </div>
      <Footer />
    </div>)
  }

  

export default App
