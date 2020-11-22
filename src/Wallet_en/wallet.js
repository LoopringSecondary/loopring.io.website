import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import WithdrawalMining from './WithdrawalMining';
import AOS from 'aos';
import FooterSection from './FooterSection';

import './wallet.scss';

const WalletPage = ({t}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navigation />
      <HeroSection />
      <FeatureSection
        even
        h1={'Guardians & Social Recovery'}
        h2={'The best balance between security and ease of use'}
        h3={
          'Say goodbye to the private key and mnemonic phrase. You can choose people, ' +
          'institutions, and hardware that you believe in as the guardians of your wallet to ' +
          'safeguard your assets. As long as more than half of the guardians are trustworthy, your ' +
          'assets are guaranteed to be secure. Add and remove guardians as you see fit.'
        }
        imageUrl={'/images/feature_social_recover.png'}
      />
      <FeatureSection
        h1={'Continuous Identity'}
        imageSize={'contain'}
        h2={'Provides you with a permanent identity on Ethereum'}
        h3={
          'Loopring Wallet decouples identity and security: you can choose your wallet name and ' +
          'address, and maintain this identity forever. Even if the worst security incident occurs, ' +
          'you can continue to use the same wallet and ensure that any assets associated with the ' +
          'wallet are safe. Compared to an ordinary wallet where, if the private key is leaked, all ' +
          'the bound assets are no longer safe.'
        }
        imageUrl={'/images/feature_identity.png'}
      />
      <FeatureSection
        even
        imageSize={'contain'}
        h1={'Fast, Cheap, Secure'}
        h2={'Layer-2 scaling is fast, inexpensive, safe, and easy to use'}
        h3={
          'Loopring Wallet integrates Loopring\'s zkRollup layer-2 scaling protocol to ensure that ' +
          'assets have the absolute same security as Ethereum mainnet. At the same time, it ' +
          'provides a payment experience comparable to Alipay and Venmo in terms of speed and ' +
          'fees, with fees merely one percent of Ethereum main net fees. Best of both worlds: ' +
          'legacy speed and cost efficiency & Ethereum security and global reach.'
        }
        imageUrl={'/images/feature_akhs.png'}
      />
      <FeatureSection
        imageSize={'contain'}
        h1={'Forward looking and future-proof'}
        h2={'Easily upgradable and adaptable to future technology'}
        h3={
          'Based on Ethereum smart contracts, Loopring Wallet adopts a pluggable modular ' +
          'design, which can be continuously upgraded under your authorization to use future ' +
          'standards and new technologies. Ethereum finance has unlimited possibilities. Ordinary ' +
          'wallets focus on the present, while Loopring Wallet is positioned for the future, whatever ' +
          'it may bring.'
        }
        imageUrl={'/images/feature_future_looking.png'}
      />

      <FeatureSection
        even
        imageSize={'contain'}
        h1={'The best choice'}
        h2={'Gateway to Ethereum & decentralized finance'}
        h3={
          'We will continue to integrate more Ethereum-based DeFi applications and layer-2 ' +
          'scaling solutions - not just Loopring. Always adhering to the principles of open source, ' +
          'no custody of user assets, and safety first. You are always in control.'
        }
        imageUrl={'/images/feature_best_choice.png'}
      />

      <WithdrawalMining />
      <FooterSection />
    </>
  );
};



export default WalletPage;
