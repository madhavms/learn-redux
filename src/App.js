import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from './actions/count';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const vh = window.innerHeight;
  console.log(vh,'hey');

  return (
    <div className="App" style={{marginTop:`${0.4*vh}px`,position:"relative",marginLeft:"40%",width:"250px",height:"200px", borderWidth:"5px", borderStyle:"solid", borderColor:"green"}}>

      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())} style = {{margin:'5px','paddingRight':'20px','paddingLeft':'20px'}}>+</button>
      <button onClick={() => dispatch(decrement())} style = {{margin:'5px','paddingRight':'20px','paddingLeft':'20px'}}>-</button>
      <button onClick={() => dispatch(reset())} style = {{margin:'5px','paddingRight':'20px','paddingLeft':'20px'}}>Reset</button>

    </div>
  );
}

export default App;
