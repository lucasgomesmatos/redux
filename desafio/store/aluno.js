// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools

const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

// Constant
const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

// Action Creator
export const incrementar_tempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzir_tempo = () => ({ type: REDUZIR_TEMPO });
export const modificar_email = (payload) => ({
  type: MODIFICAR_EMAIL,
  payload,
});

// Initial State
const initialState = 0;

// Reducer
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;
