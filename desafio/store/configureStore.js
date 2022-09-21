// Usando o Redux (pode usar Immer ou Não).
// Crie uma store contendo os estados iniciais abaixo

// Crie as seguintes ações:
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário

// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools

// configureStore.js
import aluno from './aluno.js';
import aula from './aula.js';

const reducer = Redux.combineReducers({ aluno, aula });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
