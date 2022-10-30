import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from './actions/count';

function App() {

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const vh = window.innerHeight;

  return (
    <div className="App gradient__bg" style={{marginTop:`${0.4*vh}px`,position:"relative",marginLeft:"40%",width:"250px",height:"200px", borderWidth:"5px", borderStyle:"solid"}}>

      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())} style = {{margin:'5px','paddingRight':'20px','paddingLeft':'20px'}}>+</button>
      <button onClick={() => dispatch(decrement())} style = {{margin:'5px','paddingRight':'20px','paddingLeft':'20px'}}>-</button>
      <button onClick={() => dispatch(reset())} style = {{margin:'5px','paddingRight':'20px','paddingLeft':'20px'}}>Reset</button>

    </div>
  );
}

export default App;
