import { useScroll } from '@/app/hooks/useScroll';
import { act, renderHook } from '@testing-library/react';
import { describe, it } from 'jest-circus';
import expect from 'expect';
describe('useScroll', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });
});