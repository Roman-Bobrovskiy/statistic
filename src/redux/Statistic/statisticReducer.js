import statisticActionTypes from "./statisticActionTypes";
import { combineReducers } from "redux";

const initialState = {
  countryList: [],
  id: "",
  windowCondition: false,
  error: false,
  loading: false,
};

let getCountryList = (state = initialState.countryList, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.GET_STATE:
      return payload;

    default:
      return state;
  }
};

let getId = (state = initialState.id, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.GET_ID:
      return payload;

    default:
      return state;
  }
};

let toggleModal = (state = initialState.windowCondition, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.TOGGLE_MODAL:
      return payload;

    default:
      return state;
  }
};

let error = (state = initialState.error, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.ERROR:
      return payload;
    default:
      return state;
  }
};

let loading = (state = initialState.loading, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.LOADING:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  countryList: getCountryList,
  id: getId,
  windowCondition: toggleModal,
  error: error,
  loading: loading,
});
