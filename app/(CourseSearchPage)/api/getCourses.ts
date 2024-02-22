import axios from "axios";

const getCoursesURL = "/v1/courses/";
export const getCourses = async (offset: number, count: number) => {
  try {
    const response = await axios.get(getCoursesURL, {
      params: {
        offset,
        count,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
