import { useContext } from "react";
import { MessageContext,DataContext,CounterContext} from "../App";
function Third(){
    let message = useContext(MessageContext);
    let {m1,m2,m3} = useContext(DataContext);
    let {counter,setCounter} = useContext(CounterContext)
    return <>
      <h3>Third Component..{message}</h3>
      <h4>{m1}:{m2}:{m3}</h4>
      <button onClick={()=>setCounter(counter+1)}>Inc Counter :{counter}</button>
    </>
}
export default Third;






