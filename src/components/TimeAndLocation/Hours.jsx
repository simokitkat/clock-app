import { useEffect } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";

export default function Hours() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: actions.SET_TIME });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hours">
      <h1>
        {`${state.timeNow.getHours().toString().padStart(2, 0)}:${state.timeNow
          .getMinutes()
          .toString()
          .padStart(2, 0)}:${state.timeNow
          .getSeconds()
          .toString()
          .padStart(2, 0)}`}
        <span>{state.timeZone}</span>
      </h1>
    </div>
  );
}
