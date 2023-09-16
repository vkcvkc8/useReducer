import React, { useReducer } from 'react';

function seducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    case 'TOGGLE':
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispac] = useReducer(seducer, { count: 0, isActive: true });

  return (
    <div>
      <p>Count : {state.count}</p>
      <p>Toggle : {state.isActive ? 'Yes' : 'NO'}</p>
      <button
        onClick={() => {
          dispac({ type: 'INCREMENT' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispac({ type: 'TOGGLE' });
        }}
      >
        {state.isActive ? ' ^_^ Yes' : ' ^-^ NO'}
      </button>
    </div>
  );
}
