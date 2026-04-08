import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmt } from './redux/features/counterSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(5);

  return (
    <>
      <h1>Count: {count}</h1>
      <div>
      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Decrement</button>
       <input
        value={num}
        type="number"
        onChange={(e) => {
          setNum(e.target.value)
        }} />
        <button onClick={() => {dispatch(incrementByAmt(Number(num)))}}>Increase by Value</button>
      </div>
    </>
  )
}

export default App
