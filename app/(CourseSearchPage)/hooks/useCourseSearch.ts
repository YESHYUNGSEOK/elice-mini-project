import { useEffect, useState } from "react";
import { getCourses } from "@/app/(CourseSearchPage)/api/getCourses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { COURSE_PER_PAGE } from "@/common/constants/page.constant";
import { ICourseChip } from "@/common/constants/filter.constant";

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

  const updatePathname = () => {};

  const updateCourses = async () => {
    const response = await getCourses(offset, COURSE_PER_PAGE);
    setData(response);
    console.log(response);
  };

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
