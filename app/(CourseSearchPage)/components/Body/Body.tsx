"use client";

import styled from "styled-components";
import CourseCard from "@/app/(CourseSearchPage)/components/Body/components/CourseCard/CourseCard";

interface Props {
  children: React.ReactNode;
  data: any;
}

export default function Body({
  children,
  data: { courses, course_count: totalCourses },
}: Props) {
  return (
    <Wrapper>
      <BodyAreaHeader>전체 {totalCourses}개</BodyAreaHeader>
      <BodyAreaBody>
        {courses.map((course: any) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </BodyAreaBody>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const BodyAreaHeader = styled.div`
  font-size: 12px;
  font-weight: 700;
  padding: 12px 0px;
  border-bottom: 1px solid var(--lightgray-color3);
`;

const BodyAreaBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
