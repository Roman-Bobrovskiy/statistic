import statisticActionTypes from "./statisticActionTypes";

let getState = (state) => ({
  type: statisticActionTypes.GET_STATE,
  payload: state,
});

let getId = (number) => ({
  type: statisticActionTypes.GET_ID,
  payload: number,
});

let toggleModal = (bool) => ({
  type: statisticActionTypes.TOGGLE_MODAL,
  payload: bool,
});

let loading = (bool) => ({
  type: statisticActionTypes.LOADING,
  payload: bool,
});

let error = (bool) => ({
  type: statisticActionTypes.ERROR,
  payload: bool,
});

let actionsTypes = {
  getState,
  getId,
  toggleModal,
  error,
  loading,
};

export default actionsTypes;
