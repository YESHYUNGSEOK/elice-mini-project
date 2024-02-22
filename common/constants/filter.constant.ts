export interface ICourseChip {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}

export interface ICourseFilter {
  title: string;
  items: ICourseChip[];
}

export const COURSE_FILTER: ICourseFilter[] = [
  {
    title: "가격",
    items: [
      {
        name: "무료",
        query_key: "price",
        query_value: "free",
        enroll_type: 0,
        is_free: true,
      },
      {
        name: "유료",
        query_key: "price",
        query_value: "paid",
        enroll_type: 0,
        is_free: false,
      },
    ],
  },
];
