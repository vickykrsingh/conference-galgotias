import React from 'react';
import Navbar from './Components/Navbar';
import FullScreenSlider from './Components/Slider';
import CountdownTimer from './Components/Countdown';
import WhyChooseUs from './Components/WhyChooseUs';
import AboutEvent from './Components/AboutEvent';
import Schedule from './Components/Shedule';
import Speakers from './Components/Speaker';
import Gallery from './Components/Gallery';
import Sponsors from './Components/Sponsors';
import Contact from './Components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';


function App() {
  return (
    <div id='home'>
      <Navbar />
      <FullScreenSlider />
      <CountdownTimer date={new Date('2024-09-28T00:00:00')} />
      <WhyChooseUs />
      <AboutEvent />
      <Schedule />
      <Speakers />
      <Gallery />
      <Sponsors />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
