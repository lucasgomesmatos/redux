###  Imutabilidade

```javascript

// A função reducer deve sempre retornar um estado novo, quando este for modificado. Nunca modifique o estado diretamente (ele deve ser imutável). O conceito de mutabilidade interfere principalmente em como lidamos com objetos e arrays.

const initialState = {
  nome: 'André',
  idade: 31,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MUDAR_NOME':
      // retorna um objeto novo
      return { ...state, nome: action.payload };
    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MUDAR_NOME':
      // muta o estado, errado
      state.nome = action.payload;
      return state;
    default:
      return state;
  }
};


// Arrays
// Utilize o spread [...array] para criar uma "cópia".

const array1 = [0, 1, 2, 3];
const array2 = array1; // cria uma referência
const array3 = [...array1]; // cria uma "cópia" da array original

console.log(array1 === array2); // true
console.log(array1 === array3); // false
