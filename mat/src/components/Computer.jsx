import React from 'react';

const Computer = (props) => {
  const {state, setState} = props;

  const handleClick = () => {
    setState(prevState => ({...prevState, cheating: !prevState.cheating}));
  };
  
  return (
    <section className="computer">
      <span
        role="img" 
        aria-label="robot" 
        data-testid="robot-head"
        onClick={handleClick}
        className={state.cheating ? "cheating" : null }
      >
        🤖
      </span>
      <div>
        <h1>{state.cheating ? 'EXTERRMINATE !' : 'Good game to you'}</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              {state.compSelection === 'Moai' ? '🗿' : ' ? '}
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              {state.compSelection === 'Axe' ? '⽄' : ' ? '}
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              {state.compSelection === 'Tree' ? '🌳' : ' ? '}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Computer;