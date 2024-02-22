import { useEffect, useState } from "react";
import { getCourses } from "@/app/(CourseSearchPage)/api/getCourses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { COURSE_PER_PAGE } from "@/common/constants/page.constant";
import { ICourseChip } from "@/common/constants/filter.constant";
import { COURSE_FILTER } from "@/common/constants/filter.constant";
import { OrgCourseListResponses } from "@/common/interfaces/course.interface";

export const useCourseSearch = () => {
  const [pathname, router, searchParams] = [
    usePathname(),
    useRouter(),
    useSearchParams(),
  ];
  const [keyword, setKeyword] = useState<string | null>(
    searchParams.get("keyword") || null
  );
  const [chips, setChips] = useState<ICourseChip[]>(getChipsFromQuery());
  const [data, setData] = useState<OrgCourseListResponses>();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function getChipsFromQuery() {
    const newChips = [];
    for (const chips of COURSE_FILTER) {
      for (const chip of chips.items) {
        if (searchParams.getAll(chip.query_key).includes(chip.query_value)) {
          newChips.push(chip);
        }
      }
    }
    return newChips;
  }

  const updatePathname = () => {
    let newPathname = pathname;
    let hasQuery = false;

    if (keyword) {
      newPathname += `?keyword=${keyword}`;
      hasQuery = true;
    }

    for (const chip of chips) {
      newPathname += `${hasQuery ? "&" : "?"}${chip.query_key}=${
        chip.query_value
      }`;
      hasQuery = true;
    }

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
