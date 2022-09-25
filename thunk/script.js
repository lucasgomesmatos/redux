const FETCH_STARTED = 'FETCH_STARTED';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: false,
  data: null,
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

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware());
const store = Redux.createStore(reducer, enhancer);

async function fetchUrl(dispatch, url) {
  try {
    dispatch({ type: FETCH_STARTED });
    const data = await (await fetch(url)).json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
}

fetchUrl(store.dispatch, 'https://dogsapi.origamid.dev/json/api/photo');
