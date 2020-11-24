import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';

import './WithdrawalMining.scss';

const WithdrawalMining = (props) => {
  return (
    <Section className="withdrawal-section is-large has-background-black-bis has-text-white">
      <Container>
        <div style={{ minHeight: '400px' }}>
          <div
            className="title graidient-text"
            style={{
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            Withdrawal Mining
          </div>

          <div
            className="slogan is-size-4 "
            style={{
              paddingBottom: '50px',
              color: '#65FFDA',
            }}
          >
            <span>Withdraw from CEXs to Loopring Wallet </span>
            <span>and earn your share of 1,000,000 LRC. </span>
          </div>
          <p
            className="desc has-text-white is-size-6"
            style={{ maxWidth: '680px' }}
          >
            The objective of the "Withdrawal Mining" program is to incentivize
            our community to withdraw cryptoassets from centralized platforms
            and learn to take control of their assets with a non-custodial wallet.
          </p>
          <p>
            We will release mining rules soon. Please{' '}
            <a
              className="link"
              href="http://52.82.125.33:8082/LoopringWallet.apk"
            >
              install Loopring Wallet
            </a>{' '}
            and prepare for the award!
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default WithdrawalMining;
