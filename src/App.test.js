import {checkWin} from './GameEngine';
import { x,o } from "./constants";


test('Win: X', () => {
  expect(checkWin([
    [x,  o,    ""],
    [x,  o,    ""],
    [x,  "", ""],
  ])).toBe(x);
});

test('Win: false', () => {
  expect(checkWin([
    [x,   o,    x],
    [x,   o,    ""],
    ["",  "", ""],
  ])).toBe(false);
});


test('Win: O', () => {
  expect(checkWin([
    [x,  o,    o],
    [x,  o,    ""],
    [o,  "", ""],
  ])).toBe(o);
});


test('Win: X', () => {
  expect(checkWin([
    [x,  o,    o],
    [x,  x,    ""],
    [o,  "",   x],
  ])).toBe(x);
});


test('Win: X', () => {
  expect(checkWin([
    [x,  o,   o],
    [x,  x,   x],
    [o,  "",  o],
  ])).toBe(x);
});

test('Win: false', () => {
  expect(checkWin([
    [x,  o,   o],
    [o,  x,   x],
    [o,  x,  o],
  ])).toBe(false);
});

