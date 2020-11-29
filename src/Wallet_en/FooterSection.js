import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Footer from 'react-bulma-components/lib/components/footer';

import {CenterAlignContainer} from './Common';
import './FooterSection.scss';

const FooterSection = () => {
  return (
    <Footer
      className="footer-section has-text-grey-light"
      style={{
        paddingBottom: '0px',
        background: '#f1f2f550',
        fontSize: '12px',
      }}
    >
      <Container>
        <Columns className="is-mobile">
          <Columns.Column size={4}>
            <Container className="has-text-centered">
              <div
                className="has-text-black-ter has-text-din"
                style={{fontSize: '20px', marginBottom: '8px'}}
              >
                Wallet
              </div>

              <div>
                <a href="mailto:wallet@loopring.org">Feedback</a>
                <div>
                  <a href="https://github.com/Loopring/loopring-wallet-feedback/raw/main/LoopringWallet.apk">
                    Android App (beta, not localized)
                  </a>
                </div>
                <div>iOS App </div>
              </div>
              <div>Wallet Tutorial</div>
              <div>Looping Points</div>
            </Container>
          </Columns.Column>
          <Columns.Column size={4}>
            <Container className="has-text-centered">
              <div
                className="has-text-black-ter has-text-din"
                style={{fontSize: '20px', marginBottom: '8px'}}
              >
                Social
              </div>
              <div>
                <a href="https://medium.com/loopring-protocol">Medium</a>
              </div>
              <div>
                <a href="https://github.com/Loopring">GitHub</a>
              </div>
              <div>
                <a href="https://www.youtube.com/c/loopring">YouTube</a>
              </div>
              <div>
                <a href="https://twitter.com/loopringorg">Twitter</a>
              </div>
              <div>
                <a href="https://weibo.com/loopringfoundation">Weibo</a>
              </div>
              <div>
                <a href="https://reddit.com/r/loopringorg">Reddit</a>
              </div>
              <div>
                <a href="https://t.me/loopringfans">Telegram</a>
              </div>
              <div>
                <a href="https://discord.gg/KkYccYp">Discord</a>
              </div>
            </Container>
          </Columns.Column>
          <Columns.Column size={4}>
            <Container className="has-text-centered">
              <div
                className="has-text-black-ter has-text-din"
                style={{fontSize: '20px', marginBottom: '8px'}}
              >
                Other
              </div>
              {/*     <div>
                <a href="https://exchange.loopring.io">
                  Loopring Swap & Exchange (v2)
                </a>
              </div>*/}
              <div>
                <a href="https://v1.loopring.io">Loopring Exchange (v1)</a>
              </div>
              <div>
                <a href="https://loopring.org">Loopring Protocol</a>
              </div>
              <div>Loopring AMM</div>
            </Container>
          </Columns.Column>
        </Columns>
        <CenterAlignContainer
          style={{
            fontSize: '12px',
            paddingBottom: '10px',
          }}
        >
          Copyright (2020) Loopring Technology Limited
        </CenterAlignContainer>
      </Container>
    </Footer>
  );
};

export default FooterSection;
