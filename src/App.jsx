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


function App() {
  return (
    <div>
      <Navbar />
      <FullScreenSlider />
      <CountdownTimer date={new Date('2024-12-31T00:00:00')} />
      <WhyChooseUs />
      <AboutEvent />
      <Schedule />
      <Speakers />
      <Gallery />
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
