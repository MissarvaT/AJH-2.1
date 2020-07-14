/* eslint-disable no-undef */
import Game from '../app';

test('creates a game', () => {
  const game = new Game(16);

  expect(game).toEqual({
    fieldLength: 16,
  });
});

test('returns random index', () => {
  const game = new Game(16);
  const index = game.generatePosition();

  expect(index > 0 && index < 16).toBeTruthy();
});
