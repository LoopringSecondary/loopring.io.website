import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import Container from 'react-bulma-components/lib/components/container';
import './Legal.scss';

const BaseMarkdownPage = ({file}) => {
  const [markdown, updateMarkdown] = React.useState('');

  React.useEffect(function effectFunction() {
    fetch('/markdown/legal/' + file)
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

const MarkdownFilePage = () => {
  let {file} = useParams();
  if (!file.endsWith('.md')) {
    file = file + '.md';
  }

  return <BaseMarkdownPage file={file} />;
};

const SimpleMarkdownPage = ({isChinese, name}) => {
  const file = isChinese ? name + '_zh.md' : name + '_en.md';
  return <BaseMarkdownPage file={file} />;
};

export default SimpleMarkdownPage;
export {MarkdownFilePage};
