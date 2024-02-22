"use client";

import styled from "styled-components";
import CourseCard from "@/app/(CourseSearchPage)/components/Body/components/CourseCard";
import PageNavigator from "@/app/(CourseSearchPage)/components/Body/components/PageNavigator";

export default function Body() {
  return (
    <Wrapper>
      <BodyAreaHeader>전체 277개</BodyAreaHeader>
      <BodyAreaBody>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </BodyAreaBody>
      <PageNavigator />
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
