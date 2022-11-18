import { renderHook, act } from '@testing-library/react-hooks';
import { vi } from 'vitest';
import useApi from './useApi';

const MOCK_RESULT = { random: [] };

globalThis.fetch = vi.fn().mockReturnValue(Promise.resolve(MOCK_RESULT));

describe('useApi hook', () => {
  test('should call getSymbols', () => {
    const { result } = renderHook(() => useApi());

    act(() => {
      result.current.getSymbols();
    });

    expect(globalThis.fetch).toHaveBeenCalled();
  });

  test('should call convertCurrency', () => {
    const { result } = renderHook(() => useApi());

    act(() => {
      result.current.convertCurrency(['USD', 'EUR'], 'EUR');
    });

    expect(globalThis.fetch).toHaveBeenCalled();
  });

  test('should call getRatesTimeLine', () => {
    const { result } = renderHook(() => useApi());

    act(() => {
      result.current.getRatesTimeLine('EUR', ['USD', 'EUR']);
    });

    expect(globalThis.fetch).toHaveBeenCalled();
  });
});
