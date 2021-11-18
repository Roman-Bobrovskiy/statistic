import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import actionsTypes from "../../../redux/Statistic/statisticAction";

import Modal from "../Modal/Modal";

import styles from "./infobox.module.css";

function InfoBox({
  visible,
  id,
  windowCondition,
  toggle,
  sort,
  sortNumber,
  getID,
}) {
  let openModal = (id) => {
    getID(id);
    !windowCondition && toggle(true);
  };
  let number = 1;
  return (
    <>
      {windowCondition && visible.length !== 0 && (
        <Modal data={visible} currentId={id} />
      )}
      <div className={styles.wrapInfoBox}>
        <div className={styles.titleWrap}>
          <div className={styles.wrapTitleNameCountry}>
            <span className={styles.titleNumber}>№</span>
            <span className={styles.titleText}>Country</span>
            <select
              onChange={(e) => sort(e)}
              className={styles.selectCountry}
              defaultValue={"A-Z"}
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <span className={styles.titleText}>Total Confirmed</span>
          <select
            onChange={(e) => sortNumber(e)}
            className={styles.selectNumber}
            defaultValue={"↑"}
          >
            <option value="↑">↑</option>
            <option value="↓">↓</option>
          </select>
        </div>
        <ul className={styles.infoBox}>
          {visible.length !== 0 &&
            visible.map((obj) => (
              <li
                className={styles.infoItems}
                onClick={() => openModal(obj.ID)}
                key={obj.ID}
              >
                <div className={styles.wrapInfoNameCountry}>
                  <span className={styles.infoNumber}>{number++}</span>
                  <span className={styles.infoText}>{obj.Country}</span>
                </div>
                <span className={styles.infoText}>{obj.TotalConfirmed}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

let mapStateToProps = (state) => {
  let { countryList, filter, windowCondition, id } = state.state;

  let filterToLower = filter.length !== 0 && filter.toLowerCase();

  let visible = countryList.filter((obj) =>
    filterToLower ? obj.Country.toLowerCase().includes(filterToLower) : obj
  );

  return { visible, windowCondition, id };
};

let mapDispatchToProps = {
  toggle: actionsTypes.toggleModal,
  sort: actionsTypes.sortAZ,
  sortNumber: actionsTypes.sortNumber,
  getID: actionsTypes.getId,
};

InfoBox.propTypes = {
  id: PropTypes.string.isRequired,
  windowCondition: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  sortNumber: PropTypes.func.isRequired,
  getID: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
