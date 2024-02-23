![Project Logo](https://www.askedtech.com/api/kords/admin/product/image.jpg?type=org&id=25223)

<br/><br/><br/>

# 엘리스 미니 프로젝트

프로젝트 수행 기간 : 2024.02.22 - 2024.02.23

<br/><br/>

## 사용 기술

Next 14, axios, styled-components, jest

<br/><br/>

## commit 컨벤션

**CHORE :** 코드의 기능적 변경이 아닌 프로젝트 구조 및 파일 변경

**FEAT :** 새로운 기능 추가

**FIX :** 버그 수정 및 오류 해결

**REFACTOR :** 기존 코드 리팩토링 (ex. 기능 분리, 성능 및 기능 개선)

**DOCS :** 문서 작업

**DESIGN :** css 변경 

<br/><br/>

## 아키텍처

![Project Logo](/public/project_architecture.png)

디렉토리 구조로 레이어화된 계층적 구조을 채택했습니다. 큰 범주로는 common 디렉토리와 app 디렉토리가 존재합니다.

<br/>

***common -***  프로젝트에서 재사용 가능성이 높은 공용 모듈들을 관리합니다.

***app -***  페이지(라우트 경로) 단위로 분리하며, 페이지 하위에는 각 페이지에서 요구하는 컴포넌트, 커스텀 훅, 함수 등을 디렉토리 단위로 관리합니다.

<br/>

**공통 하위 디렉토리** 

***components -***  UI를 구성하기 위한 컴포넌트 모듈을 관리합니다.

***hooks -***  비즈니스 로직을 수행하기 위한 커스텀 훅을 관리합니다.

***services -***  비즈니스 로직을 수행하기 위한 함수들을 관리합니다.

***api -***  api 호출을 담당하는 함수들을 관리합니다.

***constants -***  상수 값들을 관리합니다.

***interfaces -***  인터페이스를 관리합니다.

<br/>

*페이지 단위로 계층화된 구조는 각 페이지 단위의 코드 응집도를 높여 주고 코드 추적이 용이함으로써 개발자 경험을 높여줍니다.*

*특정 페이지에만 종속되는 모듈 외, 여러 페이지 혹은 컴포넌트에서 사용되는 공용적인 모듈은 common 디렉토리에서 관리함으로써 재사용성을 높였습니다.*

<br/><br/>

## 구현 방식

![Project Logo](/public/logic_process1.png)

1. useCourseSearch(커스텀 훅)은 Search, Filter, PageNavaigator, Body 컴포넌트가 필요로 하는 값과 값에 대한 setter를 제공합니다.
2. 각 컴포넌트는 초기에 전달받은 값을 기반으로 렌더링되며 전달받은 setter를 각 기능에 필요한 eventHandler에 바인딩합니다.
3. 초기에는 검색어와 필터가 존재하지 않으므로 모든 데이터들을 불러옵니다.

<br/>

![Project Logo](/public/logic_process2.png)

1. 각 컴포넌트의 데이터 변화는 useCourseSearch 내 useEffect의 의존성 배열에 의해 관찰됩니다.
2. 컴포넌트에서 데이터 변화가 발생할 시(ex. 검색어 번경, 필터 변경, 페이지 이동) 요청 param에 조건을 변경해 새로운 데이터를 요청합니다.
3. 새로운 데이터는 다시 Body 컴포넌트에 전달됩니다.

<br/><br/>

## 추가 구현사항

<br/>

### 첫 로드 시 Search 컴포넌트 input 포커스

![Project Logo](/public/first_load_focus.png)

페이지가 처음 로드되었을 시 사용자 경험을 높이기 위해 Search 컴포넌트의 input을 포커스하였습니다.

<br/>

### 확장 가능한 Filter 컴포넌트

![Project Logo](/public/scalable_filter.png)

Filter 컴포넌트는 사용자가 선택할 수 있는 chip 종류를 담는 배열을 props로 전달받습니다. 배열에 원하는 chips 종류를 인터페이스에 맞게 추가한다면 원하는 만큼 chips 종류를 다양화할 수 있습니다.

<br/>

### 컴포넌트 재사용성

![Project Logo](/public/coursepage_page.png)

Search, Filter, PageNavigation 컴포넌트는 CoursePage에 필요한 데이터에 의존적이지 않습니다. 때문에 다른 모듈에서 재사용될 수 있습니다.
