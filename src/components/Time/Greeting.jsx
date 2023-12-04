import moon from "../../assets/desktop/icon-moon.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import { useGlobalContext } from "../../components/GlobalContext/GlobalContext";
export default function Greeting() {
  const { state } = useGlobalContext();

  console.log(state);
  return (
    <div className="greeting">
      {state.isDay ? (
        <img src={sun} alt="sun" />
      ) : (
        <img src={moon} alt="moon" />
      )}
      <p>
        GOOD
        {state.timeNow.getHours() >= 5 && state.timeNow.getHours() < 12
          ? " MORNING"
          : state.timeNow.getHours() >= 12 && state.timeNow.getHours() < 18
          ? " AFTERNOON"
          : state.timeNow.getHours() >= 18 && state.timeNow.getHours() <= 23
          ? " EVENING"
          : " NIGHT"}
        , IT’S CURRENTLY
      </p>
    </div>
  );
}
