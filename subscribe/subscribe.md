### subscribe


``` javascript

/*
Quando o estado é modificado através de uma ação é necessário
renderizarmos o mesmo novamente na tela.
*/

<h1>Total: <span id="total"></span></h1>
<script>
  function reducer(state = 0, action) {
    if (action.type === 'incrementar') {
      return state + 1;
    }
    if (action.type === 'reduzir') {
      return state - 1;
    }
    return state;
  }
  const store = Redux.createStore(reducer);

  const total = document.getElementById('total');
  total.innerText = store.getState(); // 0

  store.dispatch({ type: 'incrementar' });

  // Se não renderizarmos novamente o resultado, ele irá se manter 0 na tela
  total.innerText = store.getState(); // 1
</script>

/*
A store possui o método subscribe que irá ativar a função que for passada como argumento do mesmo, todas as vezes que uma ação for despachada via dispatch.
*/

<h1>Total: <span id="total"></span></h1>
<script>
  function reducer(state = 0, action) {
    if (action.type === 'incrementar') {
      return state + 1;
    }
    if (action.type === 'reduzir') {
      return state - 1;
    }
    return state;
  }
  const store = Redux.createStore(reducer);

  function render() {
    const total = document.getElementById('total');
    total.innerText = store.getState();
  }
  // Ativa a função render sempre que o dispatch ocorrer
  store.subscribe(render);

  store.dispatch({ type: 'incrementar' });
  store.dispatch({ type: 'incrementar' });
  store.dispatch({ type: 'incrementar' });
  store.dispatch({ type: 'incrementar' });
  store.dispatch({ type: 'reduzir' });
</script>

// É válido o uso de múltiplos subscribes.

store.subscribe(render);
store.subscribe(() => {
  console.log('Atualizado');
});


// Unsubscribe

/*
Se por algum motivo desejar que a função pare de ser ativada quando ocorrer um dispatch, é possível utilizar o unsubscribe que é o retorno da ativação do método subscribe.
*/

const unsubscribe = store.subscribe(render);
store.dispatch({ type: 'incrementar' });

unsubscribe();
// não vai mais ativar o render
store.dispatch({ type: 'incrementar' });

```