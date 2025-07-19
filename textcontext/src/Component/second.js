import Third from "./third";
import { CounterContext } from "../App";
import { useContext } from "react";
function Second(){
    let {counter,setCounter} = useContext(CounterContext);
    return <>
      <h3>Second Component..</h3>
      <button onClick={() => setCounter(counter-1)}>dec counter:{counter}</button>
      <Third/>
    </>
}
export default Second;