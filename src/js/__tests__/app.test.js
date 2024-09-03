import Magician from '../app';

const invoker = new Magician("Invoker");

invoker.stoned = true;
invoker.range = 2;

test('should decrise attack', () => {
  const result = invoker.attack;

  expect(result).toBe(85);
});



test('should  attack', () => {
  invoker.range = 1;
  const result = invoker.attack;

  expect(result).toBe(100);
});

test('should  set attack', () => {
  invoker.attack = 150;
  const result = invoker.attack;
  expect(result).toBe(150);
});
