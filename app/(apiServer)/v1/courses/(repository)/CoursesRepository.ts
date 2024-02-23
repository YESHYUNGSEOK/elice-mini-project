import axios from "axios";
import {
  IOrgCourse,
  OrgCourseListResponses,
} from "@/common/interfaces/course.interface";

const eliceApiUrl = process.env.ELICE_API_URL as string;

export async function GETCoursesRepository(
  offset: number,
  count: number,
  filterConditions: string
) {
  try {
    const response = await axios.get(eliceApiUrl, {
      params: {
        filter_conditions: filterConditions,
        offset: offset,
        count: count,
      },
    });

    const extractedCourses = response.data.courses.map(
      (course: IOrgCourse) => ({
        id: course.id,
        title: course.title,
        enroll_type: course.enroll_type,
        is_free: course.is_free,
        short_description: course.short_description,
        logo_file_url: course.logo_file_url,
      })
    );

    const res: OrgCourseListResponses = {
      courses: extractedCourses,
      course_count: response.data.course_count,
    };

    return res;
  } catch (error) {
    throw error;
  }
}