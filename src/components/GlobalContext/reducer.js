export const actions = {
  SET_DAY: "SET_DAY",
  QUOTE_LOADING: "QUOTE_LOADING",
  QUOTE_SUCCESS: "QUOTE_SUCCESS",
  QUOTE_ERROR: "QUOTE_ERROR",
};

export const reducer = (state, action) => {
  if (action.type === actions.SET_DAY) {
    let hours = state.timeNow.getHours();

    if (hours >= 5 && hours < 18) {
      state = { ...state, isDay: true };
    } else {
      state = { ...state, isDay: false };
    }
  }

  if (action.type === actions.QUOTE_LOADING) {
    state = { ...state, isQuoteLoading: true, isQuoteError: false };
  }

  if (action.type === actions.QUOTE_ERROR) {
    state = { ...state, isQuoteLoading: false, isQuoteError: true };
  }

  if (action.type === actions.QUOTE_SUCCESS) {
    state = {
      ...state,
      isQuoteLoading: false,
      isQuoteError: false,
      quote: action.payload[0],
    };
  }

  return state;
};
