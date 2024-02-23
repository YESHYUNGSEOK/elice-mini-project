import axios from "axios";

const eliceApiUrl = process.env.ELICE_API_URL as string;

export async function GETCoursesRepository(
  offset: number,
  count: number,
  filterConditions: string
) {
  try {
    return await axios.get(eliceApiUrl, {
      params: {
        filter_conditions: filterConditions,
        offset: offset,
        count: count,
      },
    });
  } catch (error) {
    throw error;
  }
}
