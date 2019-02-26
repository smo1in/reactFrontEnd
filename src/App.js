import React  from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Podstatus from './components/podstatus/Podstatus'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route } from "react-router-dom"


const App = () => {
 
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/podstatus' component={Podstatus} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>)
  }

  

export default App
