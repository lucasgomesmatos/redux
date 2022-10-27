import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/configureStore';
import { decrement, asyncIncrement } from './store/stoke.store';

export default function App() {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div>
      <h1>{stock.counter}</h1>
      <button onClick={() => dispatch(asyncIncrement())}>incrementar</button>
      <button onClick={() => dispatch(decrement())}>reduzir</button>
    </div>
  );
}
