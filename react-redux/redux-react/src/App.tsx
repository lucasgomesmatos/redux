import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/configureStore';
import { close, open } from './store/modal.store';
import { decrement, increment } from './store/stoke.store';

export default function App() {
  const dispatch = useDispatch();
  const { stock, modal } = useSelector((state: RootState) => state);

  return (
    <div>
      {modal.modal && <h1>{stock.counter}</h1>}

      <button onClick={() => dispatch(open())}>abrir</button>
      <button onClick={() => dispatch(close())}>fechar</button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch(increment())}>incrementar</button>
      <button onClick={() => dispatch(decrement())}>reduzir</button>
    </div>
  );
}
