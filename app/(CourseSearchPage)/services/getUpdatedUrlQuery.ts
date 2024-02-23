import { ICourseChip } from "@/common/constants/filter.constant";

export const getUpdatedUrlQuery = (
  pathname: string,
  keyword: string | null,
  chips: ICourseChip[]
) => {
  let updatedUrlQuery = pathname;
  let hasQuery = false;

  if (keyword) {
    updatedUrlQuery += `?keyword=${keyword}`;
    hasQuery = true;
  }

  for (const chip of chips) {
    updatedUrlQuery += `${hasQuery ? "&" : "?"}${chip.query_key}=${
      chip.query_value
    }`;
    hasQuery = true;
  }

  return updatedUrlQuery;
};
