import React from 'react';

// import HeroSection from "./HeroSection";
import OverviewSection from './OverviewSection';
import VersionsSection from './VersionsSection';
import FeaturesSection from './FeaturesSection';
// import MediaSection from "./MediaSection";
import HacksSection from './HacksSection';

import './About.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        {/* <HeroSection />*/}
        <OverviewSection />
        <VersionsSection />
        <FeaturesSection />
        {/* <MediaSection />*/}
        <HacksSection />
      </div>
    );
  }
}

export default About;
