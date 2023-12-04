import { useEffect } from "react";
import { useGlobalContext } from "./components/GlobalContext/GlobalContext";
import { actions } from "./components/GlobalContext/reducer";
import "./globalstyles.scss";
import Quote from "./components/Quote/Quote";

function App() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: actions.SET_DAY });
  }, [state.quote]);

  return (
    <main className={state.isDay ? "day" : "night"}>
      <div className="overlay"></div>
      <div className="container">
        <Quote />
      </div>
    </main>
  );
}

export default App;
