import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import AOS from 'aos';
import HeroSection from './HeroSection';
import RulesSection from './RulesSection';

const WMiningPage = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navigation />
      {/* <HeroSection />*/}
      <RulesSection />
      <FooterSection />
    </>
  );
};

export default WMiningPage;
