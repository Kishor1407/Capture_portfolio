import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/Contactus";
//Router
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
        <AboutUs />
        </Route>
        <Route path="/work">
        <OurWork/>
        </Route>
        <Route path="/contact">
        <ContactUs/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
