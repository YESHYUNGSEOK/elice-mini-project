import { ICourseChip } from "@/common/constants/filter.constant";
import axios from "axios";

const getCoursesURL = "/v1/courses/";
export const getCourses = async (
  offset: number,
  count: number,
  keyword: string | null,
  chips: ICourseChip[]
) => {
  if (!keyword) keyword = "";
  const params = chips.map(({ name, query_key, query_value, ...rest }) => rest);

  try {
    const response = await axios.get(getCoursesURL, {
      params: {
        filter_conditions: JSON.stringify({
          $and: [{ title: `%${keyword}%` }, { $or: [...params] }],
        }),
        offset: offset,
        count: count,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
