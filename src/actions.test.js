import {newGame, NEW_GAME, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions';

describe('newGame', () => {
  it('Should return the action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
  });
});


describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 5
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  })
})
