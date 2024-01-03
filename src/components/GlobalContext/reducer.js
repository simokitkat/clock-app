export const actions = {
  SET_INITIALS: "SET_INITIALS",
  SET_QUOTE: "SET_QUOTE",
  SET_TIME: "SET_TIME",
  SET_ISMORE: "SET_ISMORE",
  // SET_ISDAY: "SET_ISDAY",
  // SET_WORLD_TIME: "SET_WORLD_TIME",
  // SET_LOCATION: "SET_LOCATION",
};

export const reducer = (state, action) => {
  if (action.type === actions.SET_INITIALS) {
    let timeString = action.payload.worldTime.datetime.slice(
      0,
      action.payload.worldTime.datetime.indexOf(".")
    );
    const time = new Date(timeString);

    //adding 3 seconds to consider the time of fetching data so that the time will be more or less equal to the time of the user
    time.setSeconds(time.getSeconds() + 3);

    const hours = time.getHours();

    state = {
      ...state,
      quote: action.payload.quote,
      worldTime: action.payload.worldTime,
      location: action.payload.location,
      timeStatus: hours >= 5 && hours < 18 ? "day" : "night",
      timeNow: time,
      timeZone: "+-".includes(action.payload.worldTime.abbreviation[0])
        ? "GMT" + action.payload.worldTime.abbreviation
        : action.payload.worldTime.abbreviation,
    };
  }

  if (action.type === actions.SET_QUOTE) {
    state = {
      ...state,
      quote: action.payload.quote,
    };
  }

  if (action.type === actions.SET_TIME) {
    const newDate = new Date(state.timeNow);
    const currentSeconds = newDate.getSeconds();
    newDate.setSeconds(currentSeconds + 1);
    state = {
      ...state,
      timeNow: newDate,
    };
  }

  if (action.type === actions.SET_ISMORE) {
    state = {
      ...state,
      isMore: action.payload,
    };
  }

  return state;
};
