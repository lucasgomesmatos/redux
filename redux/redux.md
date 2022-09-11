### Redux (Store e Reducer)

``` javascript

// O reducer é uma função responsável por retornar o estado atual da store.
function reducer() { 
    return {
        nome: "Lucas",
        id: 199,
    };
}

// A store dá acesso ao estado global e permite despacharmos ações que modificam o mesmo.
const store = Redux.createStore(reducer);

// método responsável por retorna o estado atual da store
const state = store.getState();
console.log(state.nome);

/* A função de reducer recebe dois argumentos principais, o primeiro sendo
* o estado atual (state) e o segundo uma ação (action) que será utilizado 
* para identificamos as ações despachadas pela store
*/

function reducer(state = 10, action) {
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState(); // 10

```