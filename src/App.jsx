/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const achievementsRef = useRef(null);
  const galleryRef = useRef(null);
  const ourTeamRef = useRef(null);
  const sponsorUsRef = useRef(null);
  const contactUsRef = useRef(null);

  const sections = {
    Home: homeRef,
    "About Us": aboutUsRef,
    Achievements: achievementsRef,
    Gallery: galleryRef,
    "Our Team": ourTeamRef,
    "Sponsor Us": sponsorUsRef,
    "Contact Us": contactUsRef,
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar sections={sections} />
      <section ref={homeRef}><Home /></section>
      <section ref={aboutUsRef}><h2>About Us Section</h2></section>
      <section ref={achievementsRef}><h2>Achievements Section</h2></section>
      <section ref={galleryRef}><h2>Gallery Section</h2></section>
      <section ref={ourTeamRef}><h2>Our Team Section</h2></section>
      <section ref={sponsorUsRef}><h2>Sponsor Us Section</h2></section>
      <section ref={contactUsRef}><h2>Contact Us Section</h2></section>
    </div>
  );
};

export default App;
