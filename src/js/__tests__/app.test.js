import Magician from '../app';

const invoker = new Magician("Invoker");

invoker.stoned = true;

test('should decrise attack', () => {
  const result = invoker.getRangeAttack(2);

  expect(result).toBe(85);
});

test('should  attack', () => {
  const result = invoker.getRangeAttack(1);

  expect(result).toBe(100);
});

test('should  set attack', () => {
  invoker.attack = 150;
  const result = invoker.getRangeAttack(1);

  expect(result).toBe(150);
});
