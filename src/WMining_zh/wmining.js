import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import AOS from 'aos';
import HeroSection from './HeroSection';
import HowToStep from './HowToStep';
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
      <HowToStep
        even
        step={1}
        h1={'社交守护'}
        h3={
          '向私钥和助记词说再见吧。您可以选择自己相信的人、机构、和硬件作为您钱包的守护人，为您的资产保驾护航。' +
          '过半数守护人可信，您的资产就安全。'
        }
        imageUrl={'/images/feature_social_recover_zh.png'}
      />
      <HowToStep
        step={2}
        h1={'永久身份'}
        imageSize={'contain'}
        h3={
          '路印钱包将身份与安全解耦。即使发生最坏的安全事故，您也可以继续使用同一个钱包，且保证与其关联的任何长短期利益都安全如初。' +
          '而普通钱包一旦私钥泄露，相关利益一下子就都不再安全。'
        }
        imageUrl={'/images/feature_identity_zh.png'}
      />
      <FooterSection />
    </>
  );
};

export default WMiningPage;
