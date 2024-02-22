import { useEffect, useState } from "react";
import { getCourses } from "@/app/(CourseSearchPage)/api/getCourses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { COURSE_PER_PAGE } from "@/common/constants/page.constant";
import { ICourseChip } from "@/common/constants/filter.constant";
import { COURSE_FILTER } from "@/common/constants/filter.constant";

export const useCourseSearch = () => {
  const [pathname, router, searchParams] = [
    usePathname(),
    useRouter(),
    useSearchParams(),
  ];
  const [keyword, setKeyword] = useState<string | null>(
    searchParams.get("keyword") || null
  );
  const [chips, setChips] = useState<ICourseChip[]>([]);
  const [data, setData] = useState();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const updatePathname = () => {
    let newPathname = pathname;
    if (keyword) newPathname += `?keyword=${keyword}`;
    else newPathname += "?";
    for (const chip of chips)
      newPathname += `&${chip.query_key}=${chip.query_value}`;
    router.push(newPathname);
  };

  const updateCourses = async () => {
    const response = await getCourses(offset, COURSE_PER_PAGE, keyword, chips);
    setIsLoading(false);
    setData(response);
  };

  useEffect(() => {
    updatePathname();
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
    isLoading,
  };
};
