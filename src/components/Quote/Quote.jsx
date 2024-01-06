import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";
import "./quote.scss";
import refreshIcon from "../../assets/desktop/icon-refresh.svg";

function Quote() {
  const { state, dispatch } = useGlobalContext();

  const fetchQuote = async () => {
    try {
      const request = await fetch("https://api.quotable.io/quotes/random");

      if (!request.ok) {
        return;
      }

      const response = await request.json();
      dispatch({ type: actions.SET_QUOTE, payload: { quote: response } });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);
  return (
    <section className={state.isMore ? "quote hide" : "quote"}>
      <div className="text">
        <p>{state?.quote[0]?.content}</p>
        <h2>{state?.quote[0]?.author}</h2>
      </div>

      <button onClick={fetchQuote}>
        <img src={refreshIcon} alt="refresh icon" />
      </button>
    </section>
  );
}

export default Quote;
