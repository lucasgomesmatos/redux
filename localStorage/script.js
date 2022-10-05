const FETCH_STARTED = 'FETCH_STARTED';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem('data'));
  } catch (error) {
    return initial;
  }
}

const initialState = {
  loading: false,
  data: getLocalStorage('data', null),
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

const localStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (action.localStorage !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload),
    );
  }
  console.log(action);
  return result;
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const store = Redux.createStore(reducer, enhancer);

function fetUrl(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_STARTED });
      const data = await fetch(url).then((r) => r.json());
      dispatch({ type: FETCH_SUCCESS, payload: data, localStorage: 'data' });
      console.log(data);
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
}

const state = store.getState();
if (state.data === null)
  store.dispatch(fetUrl('https://dogsapi.origamid.dev/json/api/photo'));
