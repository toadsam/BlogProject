# BlogProject

React 프론트엔드와 Spring Boot 백엔드를 함께 구성한 블로그/게시판 프로젝트입니다. 회원 인증, 게시글, 댓글, 좋아요, 검색 등 게시판 서비스의 기본 도메인을 연습합니다.

## 프로젝트 개요

`BlogProject`는 프론트엔드와 백엔드를 분리한 풀스택 학습 프로젝트입니다. `board-front`는 React 기반 화면을 담당하고, `board-back`은 Spring Boot 기반 API 서버를 담당합니다.

## 주요 기능 영역

- 회원가입/로그인 화면
- 게시글 목록, 상세, 작성, 수정 화면
- 댓글과 좋아요 관련 UI 구성
- 검색 화면
- 사용자 페이지
- Spring Security 기반 인증 구조
- JPA 기반 게시판 데이터 처리

## 기술 스택

### Frontend

- React `19`
- TypeScript
- React Router DOM
- Zustand
- React Cookie
- Create React App

### Backend

- Java 17
- Spring Boot `3.5.4`
- Spring Web
- Spring Security
- Spring Data JPA
- MySQL
- JWT
- Lombok
- Gradle

## 폴더 구조

```text
.
├── board-front/
│   ├── src/
│   │   ├── apis/
│   │   ├── components/
│   │   ├── views/
│   │   └── App.tsx
│   └── package.json
├── board-back/
│   ├── src/main/java/com/jiraynor/board_back/
│   └── build.gradle
├── board.vuerd.json
└── README.md
```

## 프론트엔드 실행

```bash
cd board-front
npm install
npm start
```

## 백엔드 실행

```bash
cd board-back
./gradlew bootRun
```

Windows에서는 다음 명령을 사용할 수 있습니다.

```bash
gradlew.bat bootRun
```

백엔드 기본 포트는 `4000`입니다.

## 로컬 설정

백엔드는 MySQL 데이터베이스를 사용합니다. 로컬 환경에 맞게 `board-back/src/main/resources/application.properties`의 DB 주소, 계정, 비밀번호, JWT secret을 조정해야 합니다.

## 개발 메모

현재 저장소에는 프론트엔드와 백엔드가 한 저장소에 함께 들어 있습니다. 이후 배포를 준비한다면 환경 변수 예시 파일, API 명세, DB ERD 설명, 프론트/백엔드 실행 순서를 더 자세히 추가하는 것이 좋습니다.
