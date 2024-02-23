import { IOrgCourse } from "@/common/interfaces/course.interface";

enum CourseCardLabel {
  FREE = "무료",
  PAID = "유료",
  SUBSCRIBED = "구독",
  UNKNOWN = "-",
}

export const getLabel = (course: IOrgCourse) => {
  if (course.enroll_type === 0) {
    if (course.is_free) return CourseCardLabel.FREE;
    else return CourseCardLabel.PAID;
  } else if (course.enroll_type === 4) {
    return CourseCardLabel.SUBSCRIBED;
  } else return CourseCardLabel.UNKNOWN;
};
