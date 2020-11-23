import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import {
  CenterAlignContainer,
  RightAlignContainer,
  LeftAlignContainer,
} from '../Wallet_zh/Common';

import './HowToStep.scss';

const HowToStep = ({step, h1, h2, h3, imageUrl, even, imageSize}) => {
  const bgImgUrl = 'url(\'' + imageUrl + '\')';
  const bgImgPosition = even ? 'right center' : 'right center';
  const columnsClassName = even ? 'is-reversed-mobile' : '';

  const textBlock = (
    <Columns.Column size={4} style={{padding: '0'}}>
      <RightAlignContainer
        data-aos="fade-up"
        style={{
          padding: '10% 10%',
          minHeight: '840px',
        }}
      >
        <div>
          <Image className="is-hidden-tablet" src={imageUrl} />

          <div
            className="has-text-black-bis is-size-3"
            style={{fontWeight: 600}}
          >
            <span className="has-text-grey">{step} | </span>
            {h1}
          </div>

          <p className="has-text-grey-dark is-size-6">{h3}</p>
        </div>
      </RightAlignContainer>
    </Columns.Column>
  );

  const imageBlock = (
    <Columns.Column size={8}>
      <CenterAlignContainer className="is-hidden-mobile">
        <Image src={imageUrl} />
      </CenterAlignContainer>
    </Columns.Column>
  );

  return (
    <Section
      className="howto-step is-medium"
      style={{
        paddingTop: '12px',
        paddingBottom: '12px',
        background: even ? '#f1f2f5' : 'white',
      }}
    >
      <Container>
        <Columns className={columnsClassName}>
          {even ? textBlock : imageBlock}
          {even ? imageBlock : textBlock}
        </Columns>
      </Container>
    </Section>
  );
};

export default HowToStep;
