"use client";

import Search from "@/app/(CourseSearchPage)/components/Search/Search";
import Filter from "@/app/(CourseSearchPage)/components/Filter/Filter";
import Body from "@/app/(CourseSearchPage)/components/Body/Body";
import PageNavigator from "@/app/(CourseSearchPage)/components/Body/components/PageNavigator";
import { useCourseSearch } from "@/app/(CourseSearchPage)/hooks/useCourseSearch";
import { COURSE_FILTER } from "@/common/constants/filter.constant";

export default function Home() {
  const {
    keyword,
    setKeyword,
    chips,
    setChips,
    data,
    setData,
    offset,
    setOffset,
  } = useCourseSearch();

  if (!data) return <main className="container"></main>;

  return (
    <main className="container">
      <Search value={keyword} dispatcher={setKeyword} />
      <Filter filter={COURSE_FILTER} chips={chips} dispatcher={setChips} />
      <Body data={data}>
        <PageNavigator />
      </Body>
    </main>
  );
}
