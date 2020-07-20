import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { AppProps } from "next/app";

import configureStore from "store";
import { FocusStyleManager } from "@blueprintjs/core";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "components/Header";
import Footer from "components/Footer";

import "styles/global.scss";
import "normalize.css/normalize.css";
import styles from "./app.module.scss";

FocusStyleManager.onlyShowFocusOnTabs();
export const store = configureStore();

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>

      <Provider store={store}>
        <div className={styles.main}>
          <Header />
          <div className={styles.body}>
            <props.Component {...props.pageProps} />
          </div>
          <Footer className={styles.footer} />
        </div>
      </Provider>
    </>
  );
};

export default App;
