import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import HowItWorks from './components/HowItWorks';
import WhyChoose from "./components/WhyChoose";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="banner-Wrapper">
          <Banner />
        </div>
        <HowItWorks />
        <WhyChoose />
        <Plans />
      </main>
    </>
  );
}

export default App;
