import { GETCoursesRepository } from "@/app/(apiServer)/v1/courses/(repository)/CoursesRepository";
import {
  IOrgCourse,
  OrgCourseListResponses,
} from "@/common/interfaces/course.interface";

export async function GETCoursesService(params: URLSearchParams) {
  try {
    const response = await GETCoursesRepository(
      parseInt(params.get("offset") as string),
      parseInt(params.get("count") as string),
      params.get("filter_conditions") as string
    );

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
