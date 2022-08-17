import React from 'react';
import HeroSection from './HeroSection';
import ImageDescription from './ImageDescription';
import RoleComponent from './RoleComponent';
import Testimonials from './Testimonials';

const CampusAmbassador = () => {
  return (
    <div className="mt-20">
      <HeroSection />
      <ImageDescription />
      <Testimonials />
      <RoleComponent />
    </div>
  );
};

export default CampusAmbassador;
