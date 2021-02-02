import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';

import {withLocalize} from 'react-localize-redux';
import {Translate} from 'react-localize-redux';
import englishTranslation from './i18n/RedPacket.en.json';
import chineseTranslation from './i18n/RedPacket.zh.json';
import I18nComponent from '../Components/I18nComponent';

import './RedPacket.scss';

class RedPacket extends I18nComponent {
  constructor(props) {
    super(props, englishTranslation, chineseTranslation);
  }

  render() {
    return (
      <div className="redpacket-page">
        <section className="section has-text-centered is-vcentered is-centered is-large">
          <FontAwesomeIcon icon={faSadTear} size="5x" />

          <h1>hello</h1>
          <div></div>
        </section>
      </div>
    );
  }
}

export default withLocalize(RedPacket);
