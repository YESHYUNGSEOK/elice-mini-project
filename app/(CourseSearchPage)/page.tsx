"use client";

import Search from "@/app/(CourseSearchPage)/components/Search/Search";
import Filter from "@/app/(CourseSearchPage)/components/Filter/Filter";
import Body from "@/app/(CourseSearchPage)/components/Body/Body";
import PageNavigator from "@/common/components/PageNavigator/PageNavigator";
import { useCourseSearch } from "@/app/(CourseSearchPage)/hooks/useCourseSearch";
import { COURSE_FILTER } from "@/common/constants/filter.constant";
import { COURSE_PER_PAGE } from "@/common/constants/page.constant";

export default function Home() {
  const {
    keyword,
    setKeyword,
    chips,
    setChips,
    data: courses,
    offset,
    setOffset,
    isLoading,
  } = useCourseSearch();

  if (isLoading) return <main className="container"></main>;

  return (
    <main className="container">
      <Search value={keyword} dispatcher={setKeyword} />
      <Filter filter={COURSE_FILTER} chips={chips} dispatcher={setChips} />
      <Body data={courses}>
        <PageNavigator
          totalLength={courses?.course_count || 0}
          offset={offset}
          count={COURSE_PER_PAGE}
          dispatcher={setOffset}
        />
      </Body>
    </main>
  );
}
