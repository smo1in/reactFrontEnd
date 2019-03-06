import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Podstatus from "./components/podstatus/Podstatus";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route
            path='/podstatus'
            render={ () => <Podstatus podStatusData={props.state.podStatus} />}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};


export default App;
