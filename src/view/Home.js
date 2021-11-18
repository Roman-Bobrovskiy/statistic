import React, { useEffect } from "react";
import { connect } from "react-redux";
import actionsTypes from "../redux/Statistic/statisticAction";
import requests from "../utils/request";

import Logo from "../components/Header/Logo/Logo";
import Search from "../components/Header/Search/Search";
import InfoBox from "../components/Main/InfoBox/InfoBox";

import styles from "./Home.module.css";

function Home({ countryList, err, load, getDataToState }) {
  useEffect(() => {
    load(true);
    countryList.length === 0 &&
      requests
        .getData()
        .then((obj) => getDataToState(obj.data.Countries))
        .catch((error) => err(true))
        .finally(() => load(false));
  }, [countryList.length, err, load, getDataToState]);

  return (
    <>
      <header>
        <div className={styles.wrapHeader}>
          <Logo />
          <Search />
        </div>
      </header>
      <main>
        <div className={styles.wrapMain}>
          <InfoBox />
        </div>
      </main>
    </>
  );
}

let mapStateToProps = (state) => {
  return state.state;
};

let mapDispatchToProps = {
  getDataToState: actionsTypes.getState,
  err: actionsTypes.error,
  load: actionsTypes.loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
