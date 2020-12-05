import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import Container from 'react-bulma-components/lib/components/container';
import './Legal.scss';

const AboutLayer2Page = ({isChinese}) => {
  const AboutLayer2File = isChinese ? 'aboutlayer2_zh.md' : 'aboutlayer2_en.md';

  const [markdown, updateMarkdown] = React.useState('');

  React.useEffect(function effectFunction() {
    fetch('/markdown/legal/' + AboutLayer2File)
        .then((response) => response.text())
        .then((content) => {
          updateMarkdown(content);
        });
  }, []);

  return (
    <Container className="legal markdown has-text-black">
      <ReactMarkdown children={markdown} />
    </Container>
  );
};

export default AboutLayer2Page;
