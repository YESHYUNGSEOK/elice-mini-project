import { renderHook } from "@testing-library/react";
import { usePagination } from "@/common/hooks/usePagination";

describe("[유닛 테스트] Hook: usePagination", () => {
  it("첫 페이지에 위치할 시", () => {
    const { result } = renderHook(() =>
      usePagination({ offset: 0, count: 10, totalLength: 100 })
    );
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(10);
    expect(result.current.hasNextPage).toBe(true);
    expect(result.current.hasPrevPage).toBe(false);
    expect(result.current.pages).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("마지막 페이지에 위치할 시", () => {
    const { result } = renderHook(() =>
      usePagination({ offset: 90, count: 10, totalLength: 100 })
    );
    expect(result.current.currentPage).toBe(10);
    expect(result.current.totalPages).toBe(10);
    expect(result.current.hasNextPage).toBe(false);
    expect(result.current.hasPrevPage).toBe(true);
    expect(result.current.pages).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("페이지 수에 맞게 버튼 개수을 제공하는지", () => {
    const { result } = renderHook(() =>
      usePagination({ offset: 35, count: 20, totalLength: 100 })
    );
    expect(result.current.currentPage).toBe(2);
    expect(result.current.totalPages).toBe(5);
    expect(result.current.hasNextPage).toBe(true);
    expect(result.current.hasPrevPage).toBe(true);
    expect(result.current.pages).toEqual([1, 2, 3, 4, 5]);
  });
  it("페이지 수에 맞게 버튼 개수을 제공하는지2", () => {
    const { result } = renderHook(() =>
      usePagination({ offset: 35, count: 15, totalLength: 40 })
    );
    expect(result.current.currentPage).toBe(3);
    expect(result.current.totalPages).toBe(3);
    expect(result.current.hasNextPage).toBe(false);
    expect(result.current.hasPrevPage).toBe(true);
    expect(result.current.pages).toEqual([1, 2, 3]);
  });
  it("게시물이 하나일 때", () => {
    const { result } = renderHook(() =>
      usePagination({ offset: 0, count: 50, totalLength: 1 })
    );
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.hasNextPage).toBe(false);
    expect(result.current.hasPrevPage).toBe(false);
    expect(result.current.pages).toEqual([1]);
  });
});
