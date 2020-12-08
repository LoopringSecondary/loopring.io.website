import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import {LocalizeProvider, withLocalize} from 'react-localize-redux';
import detectBrowserLanguage from 'detect-browser-language';

import About from './About/About';
import NotFound from './NotFound/NotFound';
import {default as Walletzh} from './Wallet_zh/wallet';
import {default as Walleten} from './Wallet_en/wallet';
import {default as WMiningzh} from './WMining_zh/wmining';
import {default as SimpleMarkdownPage} from './Legal/SimpleMarkdown';

class App extends React.Component {
  render() {
    const lang = detectBrowserLanguage().toLowerCase();
    const isChinese = lang === 'zh' || lang === 'zh-cn';
    document.title = isChinese ? '路印科技 - 钱包' : 'Loopring - Wallet';
    return (
      <LocalizeProvider>
        <HashRouter>
          <ScrollToTop>
            <Switch>
              <Route
                path="/"
                exact
                component={isChinese ? Walletzh : Walleten}
              />
              <Route path="/wmining" exact component={WMiningzh} />
              <Route
                path="/legal/terms/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="terms" isChinese={false} />
                )}
              />
              <Route
                path="/legal/terms/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="terms" isChinese={true} />
                )}
              />
              <Route
                path="/legal/terms"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="terms" isChinese={isChinese} />
                )}
              />
              <Route
                path="/legal/privacy/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="privacy" isChinese={false} />
                )}
              />
              <Route
                path="/legal/privacy/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="privacy" isChinese={true} />
                )}
              />
              <Route
                path="/legal/privacy"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="privacy" isChinese={isChinese} />
                )}
              />

              <Route
                path="/legal/risks/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="risks" isChinese={false} />
                )}
              />
              <Route
                path="/legal/risks/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="risks" isChinese={true} />
                )}
              />
              <Route
                path="/legal/risks"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="risks" isChinese={isChinese} />
                )}
              />

              <Route
                path="/legal/walletdesign/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="walletdesign" isChinese={false} />
                )}
              />
              <Route
                path="/legal/walletdesign/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="walletdesign" isChinese={true} />
                )}
              />
              <Route
                path="/legal/walletdesign"
                exact
                render={(props) => (
                  <SimpleMarkdownPage
                    name="walletdesign"
                    isChinese={isChinese}
                  />
                )}
              />

              <Route
                path="/legal/contracts/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="contracts" isChinese={false} />
                )}
              />
              <Route
                path="/legal/contracts/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="contracts" isChinese={true} />
                )}
              />
              <Route
                path="/legal/contracts"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="contracts" isChinese={isChinese} />
                )}
              />

              <Route
                path="/legal/aboutl2/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="aboutl2" isChinese={false} />
                )}
              />
              <Route
                path="/legal/aboutl2/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="aboutl2" isChinese={true} />
                )}
              />
              <Route
                path="/legal/aboutl2"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="aboutl2" isChinese={isChinese} />
                )}
              />

              <Route
                path="/legal/points/en"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="points" isChinese={false} />
                )}
              />
              <Route
                path="/legal/points/zh"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="points" isChinese={true} />
                )}
              />
              <Route
                path="/legal/points"
                exact
                render={(props) => (
                  <SimpleMarkdownPage name="points" isChinese={isChinese} />
                )}
              />

              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
      </LocalizeProvider>
    );
  }
}

export default withLocalize(App);
