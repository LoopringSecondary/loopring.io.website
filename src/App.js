import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import {LocalizeProvider, withLocalize} from 'react-localize-redux';
import detectBrowserLanguage from 'detect-browser-language';

import About from './About/About';
import NotFound from './NotFound/NotFound';
import {default as Walletzh} from './Wallet_zh/wallet';
import {default as Walleten} from './Wallet_en/wallet';

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
              {/*              <Route path="/home" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/protocol" exact component={Protocol} />
              <Route path="/lrc" exact component={LRC} />
              <Route path="/team" exact component={Team} />
              <Route path="/ceremony" exact component={Protocol} />
              <Route
                path="/blog"
                exact
                render={props => <Updates key="updates_all" group="all" />}
              />
              <Route
                path="/blog/update"
                exact
                render={props => (
                  <Updates key="updates_biweekly" group="biweekly" />
                )}
              />
              <Route
                path="/blog/loopring3.0"
                exact
                render={props => (
                  <Updates key="updates_loopring3_0" group="loopring30" />
                )}
              />

              <Route
                path="/blog/learning"
                exact
                render={props => (
                  <Updates key="updates_learning" group={"learning"} />
                )}
              />
              <Route
                path="/blog/thoughts"
                exact
                render={props => (
                  <Updates key="updates_thoughts" group="thoughts" />
                )}
              />
              <Route
                path="/blog/news"
                exact
                render={props => <Updates key="updates_news" group="news" />}
              />
              <Route path="/post/:postId" component={Article} />*/}
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
      </LocalizeProvider>
    );
  }
}

export default withLocalize(App);
