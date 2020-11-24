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
                className="has-text-black-ter"
                style={{fontSize: '20px', marginBottom: '8px'}}
              >
                钱包
              </div>

              <div>
                <a href="mailto:wallet@loopring.org">建议反馈</a>
                <div>
                  <a href="http://52.82.125.33:8082/LoopringWallet.apk">
                    安卓App
                  </a>
                </div>
                <div>iOS App</div>
              </div>
              <div>使用教程</div>
              <div>路印积分</div>
            </Container>
          </Columns.Column>
          <Columns.Column size={4}>
            <Container className="has-text-centered">
              <div
                className="has-text-black-ter"
                style={{fontSize: '20px', marginBottom: '8px'}}
              >
                联系
              </div>
              <div>
                <a href="https://medium.com/loopring-protocol">Medium</a>
              </div>
              <div>
                <a href="https://github.com/Loopring">GitHub</a>
              </div>
              <div>
                <a href="https://www.youtube.com/c/loopring">油管</a>
              </div>
              <div>
                <a href="https://twitter.com/loopringorg">推特</a>
              </div>
              <div>
                <a href="https://weibo.com/loopringfoundation">微博</a>
              </div>
              <div>
                <a href="https://reddit.com/r/loopringorg">Reddit</a>
              </div>
              <div>
                <a href="https://t.me/loopringfans">电报</a>
              </div>
              <div>
                <a href="https://discord.gg/KkYccYp">Discord</a>
              </div>
            </Container>
          </Columns.Column>
          <Columns.Column size={4}>
            <Container className="has-text-centered">
              <div
                className="has-text-black-ter"
                style={{fontSize: '20px', marginBottom: '8px'}}
              >
                其他
              </div>
              <div>路印交易所 v2</div>
              <div>
                <a href="https://v1.loopring.io">路印交易所 v1</a>
              </div>
              <div>
                <a href="https://loopring.org">路印协议</a>
              </div>
              <div>路印AMM</div>
            </Container>
          </Columns.Column>
        </Columns>
        <CenterAlignContainer
          style={{
            fontSize: '10px',
            paddingBottom: '10px',
          }}
        >
          路印科技有限公司版权所有
        </CenterAlignContainer>
      </Container>
    </Footer>
  );
};

export default FooterSection;
