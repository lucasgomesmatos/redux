import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/configureStore';
import { fetchToken } from './store/login.store';
import { close, open } from './store/modal.store';
import { decrement, increment } from './store/stoke.store';

export default function App() {
  const dispatch = useDispatch();
  const { stock, modal } = useSelector((state: RootState) => state);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(fetchToken({ username, password }));
  }

  return (
    <div>
      {/* {modal.modal && <h1>{stock.counter}</h1>}

      <button onClick={() => dispatch(open())}>abrir</button>
      <button onClick={() => dispatch(close())}>fechar</button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch(increment())}>incrementar</button>
      <button onClick={() => dispatch(decrement())}>reduzir</button> */}

      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block' }} htmlFor="username">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label style={{ display: 'block' }} htmlFor="password">
          Senha
        </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ display: 'block' }}>Enviar</button>
      </form>
    </div>
  );
}
