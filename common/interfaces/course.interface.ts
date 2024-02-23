export interface IOrgCourse {
  title: string;
  enroll_type: number;
  is_free: boolean;
  short_description: string;
  logo_file_url: string;
}

export interface OrgCourseListResponses {
  course_count: number;
  courses: IOrgCourse[];
}
