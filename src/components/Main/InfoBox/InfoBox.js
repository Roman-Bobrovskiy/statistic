import React from "react";
import { connect } from "react-redux";
import actionsTypes from "../../../redux/Statistic/statisticAction";

import Modal from "../Modal/Modal";
import styles from "./infobox.module.css";

function InfoBox({ countryList, id, windowCondition, toggle, getID }) {
  let openModal = (id) => {
    getID(id);
    !windowCondition && toggle(true);
  };

  return (
    <div className={styles.wrapInfoBox}>
      <div className={styles.titleWrap}>
        <span>№</span>
        <span>Country</span>
        <span>Total Confirmed</span>
      </div>
      {windowCondition && <Modal data={countryList} currentId={id} />}
      <ol className={styles.infoBox}>
        {countryList.length !== 0 &&
          countryList.map((obj) => (
            <li onClick={() => openModal(obj.ID)} key={obj.ID}>
              <span>{obj.Country}</span>
              <span>{obj.TotalConfirmed}</span>
            </li>
          ))}
      </ol>
    </div>
  );
}

let mapStateToProps = (state) => {
  return state.state;
};

let mapDispatchToProps = {
  toggle: actionsTypes.toggleModal,
  getID: actionsTypes.getId,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
