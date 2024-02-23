import { useEffect, useState } from "react";
import { getCourses } from "@/app/(CourseSearchPage)/api/getCourses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { COURSE_PER_PAGE } from "@/common/constants/page.constant";
import { ICourseChip } from "@/common/constants/filter.constant";
import { OrgCourseListResponses } from "@/common/interfaces/course.interface";
import { getChipsFromQuery } from "@/app/(CourseSearchPage)/services/getChipsFromQuery";
import { getUpdatedUrlQuery } from "@/app/(CourseSearchPage)/services/getUpdatedUrlQuery";

export const useCourseSearch = () => {
  const [pathname, router, searchParams] = [
    usePathname(),
    useRouter(),
    useSearchParams(),
  ];
  const [keyword, setKeyword] = useState<string | null>(
    searchParams.get("keyword") || null
  );
  const [chips, setChips] = useState<ICourseChip[]>(
    getChipsFromQuery(searchParams)
  );
  const [data, setData] = useState<OrgCourseListResponses>();
  const [offset, setOffset] = useState(0);

  const updateCourses = async () => {
    const response = await getCourses(offset, COURSE_PER_PAGE, keyword, chips);
    setData(response);
  };

  useEffect(() => {
    router.push(getUpdatedUrlQuery(pathname, keyword, chips));
    updateCourses();
  }, [keyword, chips, offset]);

  useEffect(() => {
    setOffset(0);
  }, [keyword, chips]);

  return {
    keyword,
    setKeyword,
    chips,
    setChips,
    data,
    setData,
    offset,
    setOffset,
    isLoading: data ? false : true,
  };
};
