import { announceResult, robotChoice } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('robotChoice function', () => {

  test('given player choice and that cheating is TRUE, robot returns the winning option', () => {
    const cheating = true;

    let playerSelection = 'Axe';
    let result = robotChoice(playerSelection, cheating);
    expect(result).toBe('Moai');

    playerSelection = 'Moai';
    result = robotChoice(playerSelection, cheating);
    expect(result).toBe('Tree');

    playerSelection = 'Tree';
    result = robotChoice(playerSelection, cheating);
    expect(result).toBe('Axe');
  });

});
