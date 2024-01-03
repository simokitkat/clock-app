import moon from "../../assets/desktop/icon-moon.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import { useGlobalContext } from "../../components/GlobalContext/GlobalContext";
export default function Greeting() {
  const { state } = useGlobalContext();

  const hours = state.timeNow.getHours();
  console.log(state);

  return (
    state.timeStatus && (
      <div className="greeting">
        {state.timeStatus === "day" ? (
          <img src={sun} alt="sun" />
        ) : (
          <img src={moon} alt="moon" />
        )}
        <p>
          GOOD
          {hours >= 5 && hours < 12
            ? " MORNING"
            : hours >= 12 && hours < 18
            ? " AFTERNOON"
            : hours >= 18 && hours <= 23
            ? " EVENING"
            : " NIGHT"}
          , IT’S CURRENTLY
        </p>
      </div>
    )
  );
}
