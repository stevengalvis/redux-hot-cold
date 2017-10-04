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

  
});
