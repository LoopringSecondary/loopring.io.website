import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';

import './HeroSection.scss';

import { CenterAlignContainer } from './Common';

const HoverableButton = styled(Button)`
  &:hover {
    background-color: #00bba8 !important;
  }
`;
const DownloadButton = (props) => {
  const classes = props.primary ?
    'has-background-primary has-text-white' :
    'has-background-white has-text-black-bis';

  return (
    <a href="http://52.82.125.33:8082/LoopringWallet.apk">
      <HoverableButton
        className={classes}
        size="large"
        style={{
          borderRadius: '20px',
          width: '300px',
          fontSize: '16px',
          fonWeight: '400',
          margin: '20px',
          transition: '0.5s',
          border: 'none',
        }}
      >
        Get Android App
      </HoverableButton>
    </a>
  );
};

const HeroSection = (props) => {
  return (
    <>
      <Section
        className="hero-section-top has-background-primary has-text-white"
        style={{
          paddingBottom: '40px',
          backgroundImage: 'url(\'/images/bg_color_top.png\')',
          backgroundSize: 'cover',
          borderBottom: '180px solid white',
        }}
      >
        <CenterAlignContainer>
          <div className="has-text-centered">
            <div
              className="is-size-4-mobile is-size-3"
              style={{ fontWeight: '600' }}
            >
              Loopring Wallet
            </div>
            <div
              className="is-size-3-mobile is-size-1"
              style={{
                fontWeight: '300',
                paddingTop: '40px',
                paddingBottom: '20px',
              }}
            >
              Freedom at Your Fingertips
            </div>
          </div>
        </CenterAlignContainer>

        <CenterAlignContainer>
          <Image
            style={{
              margin: 'auto',
              marginTop: '10px',
              marginBottom: '-240px',
              width: '340px',
              filter: 'drop-shadow(0 0 1rem rgba(0,0,0,0.5))',
            }}
            src={'/images/top.png'}
          />
        </CenterAlignContainer>
      </Section>

      <Section className="hero-section-bottom is-small has-background-white">
        <CenterAlignContainer>
          <div className="has-text-centered" style={{ marginTop: '0' }}>
            <DownloadButton primary />
            <div
              className="first-zkrollup has-text-black-bis "
              style={{ paddingTop: '60px', fontWeight: '600' }}
            >
              First Ever
            </div>
            <div
              className="has-text-black-bis is-size-4-mobile is-size-4"
              style={{ fontWeight: '500' }}
            >
              Ethereum Smart Wallet with zkRollup-based Trading, Transfers & AMMs.
            </div>

            <div
              className="has-text-grey-dark is-size-6"
              style={{
                maxWidth: '600px',
                margin: 'auto',
                marginTop: '30px',
                marginBottom: '120px',
              }}
            >
              Loopring's zkRollup L2 solution offers the same security
              guarantees as Ethereum mainnet, with a big scalability boost: throughput increased
              by 1000x, and cost recuced to just 0.1% of L1. Ethereum is now unleashed.
              One year ago, we launched the first zkRollup on Ethereum - now we put its power in your pocket.
              Smooth orderbook trading, AMMs, and global payments, right from the Loopring wallet.
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default HeroSection;
export { CenterAlignContainer, DownloadButton };
