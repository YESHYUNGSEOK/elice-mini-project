import React from "react";
import { render, act } from "@testing-library/react";
import { useDebounce } from "@/common/hooks/useDebounce";

function MockComponent1({ onAction }: { onAction: () => void }) {
  const { debounce } = useDebounce();
  return <button onClick={() => debounce("testAction1", onAction, 500)} />;
}

function MockComponent2({ onAction }: { onAction: () => void }) {
  const { debounce } = useDebounce();
  return <button onClick={() => debounce("testAction2", onAction, 500)} />;
}

describe("[유닛 테스트] Hook: useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("함수가 한번 호출되었을 때 지연시간이 적용되는지", () => {
    const mockCallback = jest.fn();

    const { getByRole } = render(<MockComponent1 onAction={mockCallback} />);

    act(() => {
      getByRole("button").click();
    });

    expect(mockCallback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("함수가 연속적으로 호출되었을 때 디바운스 효과가 적용되는지", () => {
    const mockCallback = jest.fn();

    const { getByRole } = render(<MockComponent1 onAction={mockCallback} />);

    act(() => {
      getByRole("button").click();
      jest.advanceTimersByTime(300);
    });

    expect(mockCallback).not.toHaveBeenCalled();

    act(() => {
      getByRole("button").click();
      jest.advanceTimersByTime(500);
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("다른 액션에 대해서는 다른 타이머가 적용되는지(키값 적용)", () => {
    const mockCallback = jest.fn();

    const { getAllByRole } = render(
      <>
        <MockComponent1 onAction={mockCallback} />
        <MockComponent2 onAction={mockCallback} />
      </>
    );

    act(() => {
      getAllByRole("button")[0].click();
      jest.advanceTimersByTime(300);
      getAllByRole("button")[1].click();
      jest.advanceTimersByTime(200);
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockCallback).toHaveBeenCalledTimes(2);
  });
});
