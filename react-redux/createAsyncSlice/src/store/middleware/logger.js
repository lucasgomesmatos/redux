const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('ACTION', action);
  console.log('PREV_STATE', store.getSate());
  const result = next(action);
  console.log('NEW_STATE', store.getSate());
  console.groupEnd(action.type);
  return result;
};

export default logger;
