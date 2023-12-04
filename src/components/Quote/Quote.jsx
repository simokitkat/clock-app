import { useEffect } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";
import "./quote.scss";
import refreshIcon from "../../assets/desktop/icon-refresh.svg";

function Quote() {
  const { state, dispatch } = useGlobalContext();

  const fetchData = async () => {
    dispatch({ type: actions.QUOTE_LOADING });

    try {
      let request = await fetch("https://api.quotable.io/quotes/random");

      if (!request.ok) {
        dispatch({ type: actions.QUOTE_ERROR });
      }

      let response = await request.json();
      dispatch({ type: actions.QUOTE_SUCCESS, payload: response });
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.QUOTE_ERROR });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state.quote);
  return (
    <section className="quote">
      <div className="text">
        <p>{state?.quote?.content}</p>
        <h2>{state?.quote?.author}</h2>
      </div>
      {state.quote && (
        <button onClick={() => fetchData()}>
          <img src={refreshIcon} alt="refresh icon" />
        </button>
      )}
    </section>
  );
}

export default Quote;
