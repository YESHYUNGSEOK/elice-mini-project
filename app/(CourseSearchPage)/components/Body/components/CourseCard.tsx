"use client";

import styled from "styled-components";
import CalenderIcon from "@/common/components/icons/CalenderIcon";
import LaptopIcon from "@/common/components/icons/LaptopIcon";
import LevelIcon from "@/common/components/icons/LevelIcon";

interface Props {
  course: any;
}

export default function CourseCard({ course }: Props) {
  const getLabel = () => {
    if (course.enroll_type === 0) {
      if (course.is_free) return "무료";
      else return "유료";
    } else if (course.enroll_type === 4) {
      return "구독";
    }
  };

  return (
    <Wrapper>
      <Label>{getLabel()}</Label>
      <Title>{course.title}</Title>
      <Description>{course.short_description}</Description>
      <Content>
        <Info>
          <InfoItem>
            <LevelIcon size={24} />
            <span>난이도 : 미설정</span>
          </InfoItem>
          <InfoItem>
            <LaptopIcon size={24} />
            <span>수업 : 온라인</span>
          </InfoItem>
          <InfoItem>
            <CalenderIcon size={24} />
            <span>기간 : 무제한</span>
          </InfoItem>
        </Info>
        <Logo src={course.logo_file_url} />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 338px;
  width: 296px;
  border-radius: 8px;
  border: none;
  padding: 28px 24px;
  background-color: var(--white-color);
  gap: 16px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: var(--purple-color);
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: bold;
  color: #222;
  line-height: 1.6;
`;

const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  font-size: 14px;
  color: var(--gray-color);
  line-height: 1.6;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    font-size: 12px;
    color: #7d7e80;
  }
`;

const Logo = styled.img`
  width: 52px;
  aspect-ratio: 1;
  object-fit: contain;
`;
