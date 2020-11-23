import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';

import './RulesSection.scss';

import {CenterAlignContainer} from '../Wallet_zh/Common';

const RulesSection = (props) => {
  return (
    <>
      <Section
        className="wmining-rules-section is-large has-background-white"
        style={{}}
      >
        <CenterAlignContainer>
          <div className="has-text-left">
            <div className="is-size-1" style={{fontWeight: '600'}}>
              奖励规则
            </div>
            <div className="is-size-6 has-text-dark">
              <ol style={{maxWidth: '800px', padding: '20px'}}>
                <li>活动时间为11月27日（含）至12月26日（含），共30天。</li>
                <li>
                  挖矿总奖励为<span className="strong">100万LRC</span>
                  。按天平均分配，即每天奖励3.33万LRC。
                </li>
                <li>
                  从中心化平台提现LRC，ETH，USDT，WBTC，USDC和DAI到路印钱包（安卓版）参与挖矿。
                </li>
                <li>
                  每个钱包用户参与挖矿的本金上限为10万USDT，超出部分不参与挖矿。
                </li>
                <li>
                  付费创建钱包用户和北京时间11月27日零点前创建钱包的用户
                  <span className="strong">奖励翻倍</span>。
                </li>
                <li>
                  LRC<span className="strong">奖励翻倍</span>。
                </li>
                <li>
                  把资产划转到路印3.6二层账号后
                  <span className="strong">奖励翻倍</span>。
                </li>
                <li>
                  钱包添加至少三个守护人后
                  <span className="strong">奖励翻倍</span>。
                </li>

                <li>
                  以上翻倍均可叠加，但最多以8倍计算（即挖矿参与额度不超过80万USDT）。
                </li>
                <li>
                  我们每天会随机选择一个时间点进行快照，根据您挖矿参与额度当日占比来计算奖励。
                </li>
                <li>我们会在次日把LRC奖励直接发放到路印钱包的二层账号中。</li>
              </ol>
              如果您想了解规则的更多解读，可以参考我们的<a>相关博客</a>。
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default RulesSection;
