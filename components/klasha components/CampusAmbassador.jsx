import React from 'react';
import HeroSection from './HeroSection';
import ImageDescription from './ImageDescription';
import RoleComponent from './RoleComponent';
import Testimonials from './Testimonials';
import NewGains from './NewGains';
import Accordian from './Accordian';

const CampusAmbassador = () => {
  return (
    <div className="mt-20">
      <HeroSection />
      <ImageDescription />
      {/* <Testimonials /> */}
      <NewGains />
      <RoleComponent />
      <Accordian />
    </div>
  );
};

export default CampusAmbassador;
