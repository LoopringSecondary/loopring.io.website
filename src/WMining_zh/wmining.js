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
        titles={[
          '使用手机或邮箱号注册。',
          '若手机用户未收到验证码，可能是屏蔽了第三方服务。',
        ]}
      />
    </>
  );
};

export default WMiningPage;
