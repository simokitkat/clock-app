import { useEffect } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { actions } from "../GlobalContext/reducer";

export default function MoreDetails() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    async function getTimeDetails() {
      try {
        const request = await fetch("http://worldtimeapi.org/api/ip");
        if (!request.ok) {
          return;
        }

        const reposonse = await request.json();
        dispatch({ type: actions.SET_WORLD_TIME, payload: reposonse });
        console.log(reposonse);
      } catch (error) {
        console.log(error);
      }
    }
    getTimeDetails();
  }, []);
  return <div>MoreDetails</div>;
}
