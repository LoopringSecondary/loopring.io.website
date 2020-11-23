import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';

import './HeroSection.scss';

import {CenterAlignContainer} from '../Wallet_zh/Common';

const RulesSection = (props) => {
  return (
    <>
      <Section
        className="wmining-rules-section is-large has-background-white has-text-dark"
        style={{}}
      >
        <CenterAlignContainer>
          <div className="has-text-left">
            <div className="is-size-1" style={{fontWeight: '600'}}>
              奖励规则
            </div>
            <div className="is-size-6 has-text-grey">
              <ol style={{maxWidth: '800px', padding: '20px'}}>
                <li>
                  拔插发放爱抚,拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚拔插发放爱抚
                </li>
                <li>拔插发放爱抚</li>
                <li>拔插发放爱抚</li>
                <li>拔插发放爱抚</li>
                <li>拔插发放爱抚</li>
                <li>拔插发放爱抚</li>
                <li>拔插发放爱抚</li>
                <li>拔插发放爱抚</li>
              </ol>
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default RulesSection;
