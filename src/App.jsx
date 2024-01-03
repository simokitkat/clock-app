import { useEffect } from "react";
import { useGlobalContext } from "./components/GlobalContext/GlobalContext";
import { actions } from "./components/GlobalContext/reducer";
import "./globalstyles.scss";
import Quote from "./components/Quote/Quote";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";

function App() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const quoteRequest = await fetch(
          "https://api.quotable.io/quotes/random"
        );
        const timeRequest = await fetch("https://worldtimeapi.org/api/ip");
        const locationRequest = await fetch(`https://ipapi.co/json/`);

        if (!quoteRequest.ok || !timeRequest.ok || !locationRequest.ok) {
          return;
        }

        const quoteResponse = await quoteRequest.json();
        const timeResponse = await timeRequest.json();
        const locationResponse = await locationRequest.json();

        dispatch({
          type: actions.SET_INITIALS,
          payload: {
            quote: quoteResponse,
            worldTime: timeResponse,
            location: locationResponse,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main
      className={
        state.timeStatus === "day"
          ? "day"
          : state.timeStatus === "night"
          ? "night"
          : ""
      }
    >
      <div className="overlay"></div>
      <div className="container">
        <Quote />
        <TimeAndLocation />
      </div>
      {/* <MoreDetails /> */}
    </main>
  );
}

export default App;
