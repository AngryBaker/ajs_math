import Magician from '../app';

const invoker = new Magician("Invoker");

invoker.setStoned();

test('should decrise attack', () => {
  const result = invoker.getAttack(2);

  expect(result).toBe(85);
});

test('should  attack', () => {
  const result = invoker.getAttack(1);

  expect(result).toBe(100);
});

test('should  set attack', () => {
  invoker.setAttack(150);
  const result = invoker.getAttack(1);

  expect(result).toBe(150);
});
