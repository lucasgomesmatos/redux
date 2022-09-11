### Redux (action)

``` javascript
/*
Para atualizamos o estado, enviamos uma ação (action) através da (store)
utilizando o método (dispatch). Uma ação é sempre um objeto que contém
o tipo (type) e um valor caso necessário (payload).

No (reducer) verificamos o tipo da açã enviada e retornamos o novo estado 
a partir disso.

*/

const SOMAR = "SOMAR"

function reducer(state= 10, action) {
  switch(action.type) {
    case SOMAR: 
      return state + action.payload;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

let state = store.getState();
console.log(state); // 10


// Enviar um objeto com type e payload para o reducer
store.dispatch({type: "SOMAR", payload: 25});

state = store.getState();
console.log(state); // 35

```

### Sem Payload

``` javascript
/*
Não é necessário passar sempre um payload. Existem ações 
que só precisam do tipo para serem efetivas    
*/

const INCREMENTAR = "INCREMENTAR"

function reducer(state= 10, action) {
  switch(action.type) {
    case INCREMENTAR: 
      return state++;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

let state = store.getState();
console.log(state); // 10


// Enviar um objeto com type e payload para o reducer
store.dispatch({type: "INCREMENTAR"});

state = store.getState();
console.log(state); // 11

```

### Constantes

``` javascript

/* 
O tipo type da ação é sempre uma string que identifica a mesma. Por ser uma string, o utilizador das mesmas pode acabar cometendo um erro de digitação, introduzindo assim um BUG ao aplicativo.
Para evitar esse problema é comum criarmos constantes para os nomes de cada ação que possuirmos.
*/

const INCREMENTAR = 'INCREMENTAR';
const REDUZIR = 'REDUZIR';
const SOMAR = 'SOMAR';

function reducer(state = 0, action) {
  if (action.type === INCREMENTAR) {
    return state + 1;
  }
  if (action.type === REDUZIR) {
    return state - 1;
  }
  if (action.type === SOMAR) {
    return state + action.payload;
  }
  return state;
}
const store = Redux.createStore(reducer);

store.dispatch({ type: INCREMENTAR });
store.dispatch({ type: REDUZIR });
store.dispatch({ type: SOMAR, payload: 20 });

```

### Action Creator

``` javascript

/* 
Mais uma prática comum para facilitar o uso de ações é a criação de funções que retornam o objeto da ação. Essas são chamadas de Action Creators.
*/

function incrementar() {
  return { type: INCREMENTAR };
}

function reduzir() {
  return { type: REDUZIR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

store.dispatch(incrementar());
store.dispatch(reduzir());
store.dispatch(somar(20));

```

### Eventos

``` javascript

/*
As ações geralmente serão disparadas através de eventos. Seja com o addEventListener no JavaScript ou em eventos como onClick no React.
*/

const button = document.querySelector('.button');
button.addEventListener('click', () => store.dispatch(incrementar()));

```