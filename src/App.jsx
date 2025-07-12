import React,{useState} from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import HowItWorks from './components/HowItWorks';
import WhyChoose from "./components/WhyChoose";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {

   const [login, setLogin] = useState(false);
    const handleLogin=()=>
    {
      setLogin(true);
    }
    const handleCloseLogin = ()=>{
      setLogin(false);
    }
  return (
    <> {login && <Login closeLogin = {handleCloseLogin} />}
      {!login && <Navbar onLogin={handleLogin} />}
      {!login && <main>
        <div className="banner-Wrapper">
          <Banner />
        </div>
        <HowItWorks />
        <WhyChoose />
        <Plans />
        <FAQ />
        <Footer />
      </main>}
    </>
  );
}

export default App;
