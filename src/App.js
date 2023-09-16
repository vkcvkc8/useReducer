import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  name: 'John',
  isActive: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'TOGGLE':
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <p>Active: {state.isActive ? 'Yes' : 'No'}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle Active</button>
    </div>
  );
}

export default App;
