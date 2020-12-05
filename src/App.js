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
import {default as TermsPage} from './Legal/Terms';
import {default as RisksPage} from './Legal/Risks';
import {default as PrivacyPage} from './Legal/Privacy';
import {default as WalletDesignPage} from './Legal/WalletDesign';
import {default as SmartContractsPage} from './Legal/SmartContracts';
import {default as AboutLayer2Page} from './Legal/AboutLayer2';

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
                render={(props) => <TermsPage isChinese={false} />}
              />
              <Route
                path="/legal/terms/zh"
                exact
                render={(props) => <TermsPage isChinese={true} />}
              />
              <Route
                path="/legal/terms"
                exact
                render={(props) => <TermsPage isChinese={isChinese} />}
              />
              <Route
                path="/legal/privacy/en"
                exact
                render={(props) => <PrivacyPage isChinese={false} />}
              />
              <Route
                path="/legal/privacy/zh"
                exact
                render={(props) => <PrivacyPage isChinese={true} />}
              />
              <Route
                path="/legal/privacy"
                exact
                render={(props) => <PrivacyPage isChinese={isChinese} />}
              />

              <Route
                path="/legal/risks/en"
                exact
                render={(props) => <RisksPage isChinese={false} />}
              />
              <Route
                path="/legal/risks/zh"
                exact
                render={(props) => <RisksPage isChinese={true} />}
              />
              <Route
                path="/legal/risks"
                exact
                render={(props) => <RisksPage isChinese={isChinese} />}
              />

              <Route
                path="/legal/walletdesign/en"
                exact
                render={(props) => <WalletDesignPage isChinese={false} />}
              />
              <Route
                path="/legal/walletdesign/zh"
                exact
                render={(props) => <WalletDesignPage isChinese={true} />}
              />
              <Route
                path="/legal/walletdesign"
                exact
                render={(props) => <WalletDesignPage isChinese={isChinese} />}
              />

              <Route
                path="/legal/contracts/en"
                exact
                render={(props) => <SmartContractsPage isChinese={false} />}
              />
              <Route
                path="/legal/contracts/zh"
                exact
                render={(props) => <SmartContractsPage isChinese={true} />}
              />
              <Route
                path="/legal/contracts"
                exact
                render={(props) => <SmartContractsPage isChinese={isChinese} />}
              />

              <Route
                path="/legal/aboutl2/en"
                exact
                render={(props) => <AboutLayer2Page isChinese={false} />}
              />
              <Route
                path="/legal/aboutl2/zh"
                exact
                render={(props) => <AboutLayer2Page isChinese={true} />}
              />
              <Route
                path="/legal/aboutl2"
                exact
                render={(props) => <AboutLayer2Page isChinese={isChinese} />}
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
