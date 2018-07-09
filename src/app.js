// @flow
import * as React from "react";
import { capitalize } from "lodash";
import { ConfigProvider, Dev, Layout, Grid, Root } from "gymnast";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Header, Footer, DynamicImport } from "./components";
import styles from "./app.css";

function getPageComponent(load) {
  return function Page(props) {
    return (
      <DynamicImport load={load}>
        {Component => <Component {...props} />}
      </DynamicImport>
    );
  };
}

const pages = ["home", "settings", "topics"].map(page => ({
  component: getPageComponent(() => import(`./pages/${page}`)),
  exact: page === "home",
  path: page === "home" ? "/" : `/${page}`,
  title: capitalize(page)
}));

const App = () => (
  <BrowserRouter>
    <ConfigProvider>
      <Dev />
      <Layout height="parent" className={styles.page}>
        <Header fixed="top" pages={pages} />
        <Layout height="parent" marginTop={7.5} align="top">
          <Layout height="auto">
            <Root>
              <Grid marginBottom={0} marginTop="L">
                {pages.map(({ exact, component, path }) => (
                  <Route {...{ exact, path, component }} key={path} />
                ))}
              </Grid>
            </Root>
          </Layout>
          <Footer />
        </Layout>
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
