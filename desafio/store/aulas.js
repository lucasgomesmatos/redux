const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

// Constant
const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

// Action Creator
export const completar_aula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso = () => ({ type: RESETAR_CURSO });

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
