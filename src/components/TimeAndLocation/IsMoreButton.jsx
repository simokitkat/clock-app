import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";
import { ArrowDown, ArrowUp } from "../SVGs/SVGs";

export default function IsMoreButton() {
  const { state, dispatch } = useGlobalContext();
  function handleClick() {
    dispatch({ type: actions.SET_ISMORE, payload: !state.isMore });
  }

  return (
    <button onClick={handleClick} className="is-more">
      {state.isMore ? (
        <>
          <span>LESS</span>
          <ArrowUp />
        </>
      ) : (
        <>
          <span>MORE</span>
          <ArrowDown />
        </>
      )}
    </button>
  );
}
