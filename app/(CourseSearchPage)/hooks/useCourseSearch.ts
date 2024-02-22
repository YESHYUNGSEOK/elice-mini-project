import { useEffect, useState } from "react";
import { getCourses } from "@/app/(CourseSearchPage)/api/getCourses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { COURSE_PER_PAGE } from "@/common/constants/page.constant";

export const useCourseSearch = () => {
  const [pathname, router, searchParams] = [
    usePathname(),
    useRouter(),
    useSearchParams(),
  ];

  const [keyword, setKeyword] = useState<string | null>(
    searchParams.get("keyword") || null
  );
  const [chips, setChips] = useState([]);
  const [data, setData] = useState();
  const [offset, setOffset] = useState(0);

  const updatePathname = () => {};

  const updateCourses = async () =>
    setData(await getCourses(offset, COURSE_PER_PAGE));

  useEffect(() => {
    updatePathname();
    updateCourses();
  }, [keyword, chips, offset]);

  return {
    keyword,
    setKeyword,
    chips,
    setChips,
    data,
    setData,
    offset,
    setOffset,
  };
};
