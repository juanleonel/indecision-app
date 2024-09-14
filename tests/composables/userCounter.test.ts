import { useCounter } from '@/components/composables/useCounter';

describe('useCounter', () => {
  test('initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });
});
