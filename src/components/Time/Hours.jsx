import { useEffect } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";

export default function Hours() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: actions.SET_TIME });
    }, 1000);
  }, []);

  return (
    state.timeZoneAbbreviation && (
      <div className="hours">
        <h1>
          {`${state.timeNow
            .getHours()
            .toString()
            .padStart(2, 0)}:${state.timeNow
            .getMinutes()
            .toString()
            .padStart(2, 0)}`}
          <span>{state.timeZoneAbbreviation}</span>
        </h1>
      </div>
    )
  );
}
