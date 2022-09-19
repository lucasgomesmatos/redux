### Função Pura

```javascript

/*
Funções puras retornam sempre o mesmo valor dado um mesmo argumento e não produzem efeitos colaterais.

Retornar um mesmo valor significa que os cálculos internos da função não podem depender de números aleatórios, tempo, data e outros dados que possam mudar no futuro.

Efeitos colaterais são aqueles que impactam objetos/elementos que não pertencem a função. Exemplo: fetch, setTimeout, manipular dom, modificar objetos/arrays externas e outros.

*/

// Incorreta 
<div id="caixa" style="background: blue; height: 50px"></div>
<script>
  function reducer(state = 0, action) {
    switch (action.type) {
      case 'MODIFICAR_WIDTH':
        // Efeito colateral, está manipulando o DOM.
        const caixa = document.getElementById('caixa');
        caixa.style.width = action.payload + 'px';
        return action.payload;
      default:
        return state;
    }
  }
  const store = Redux.createStore(reducer);
  store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });
</script>

// Correta 
<div id="caixa" style="background: blue; height: 50px"></div>
<script>
  function reducer(state = 0, action) {
    switch (action.type) {
      case 'MODIFICAR_WIDTH':
        // O reducer atualiza apenas o estado
        return action.payload;
      default:
        return state;
    }
  }
  const store = Redux.createStore(reducer);
  function render() {
    // O dom é manipulado pela função de renderização.
    // No caso do React seria dentro do componente.
    const caixa = document.getElementById('caixa');
    const state = store.getState();
    caixa.style.width = store.getState() + 'px';
  }
  store.subscribe(render);
  store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });
</script>


/*

Redux DevTools

Uma das principais vantagens do uso do Redux é a utilização da sua extensão do browser para debugarmos mudanças no estado.

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
*/

``` 

### Efeitos colaterais

``` javascript

/*
Um dos problemas dos efeitos colaterais é o fato deles quebrarem funcionalidades da devtool como o Time Travel.

*/

// Incorreto
function reducer(state = 0, action) {
  switch (action.type) {
    case 'MODIFICAR_WIDTH':
      const caixa = document.getElementById('caixa');
      caixa.style.width = action.payload + 'px';
      return action.payload;
    default:
      return state;
  }
}
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 200 });
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 300 });


// Correto
function reducer(state = 0, action) {
  switch (action.type) {
    case 'MODIFICAR_WIDTH':
      return action.payload;
    default:
      return state;
  }
}
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
function render() {
  const caixa = document.getElementById('caixa');
  caixa.style.width = store.getState() + 'px';
}
store.subscribe(render);
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 200 });
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 300 });
'