import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {


  it('Should get the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '_UNKNOWN'});
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    });
  });

  it('Shoud return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '_UNKNOWN'});
    expect(state).toBe(currentState);
  });
});
