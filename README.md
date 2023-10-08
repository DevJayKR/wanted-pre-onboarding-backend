## Wanted Pre-Onboarding Backend Project

### 작동법

이 프로젝트를 실행하기 위해서는 로컬 환경에 Docker와 Docker-compose가 설치되어 있어야 합니다.

서버 실행시

1. 프로젝트 루트 경로의 example.env 파일을 참조하여 .env 파일을 생성합니다.
2. `npm run docker:up` 명령어로 PostgreSQL을 실행합니다.
3. `npm run start:dev` 명령어로 서버를 실행합니다.

서버 종료시

1. 서버를 종료합니다.
2. `npm run docker:down` 명령어로 PostgreSQL을 종료합니다.

### 사용 기술

- Nest.js
- TypeORM
- PostgreSQL
- Docker, Docker-compose

## 요구 사항

### 회사

- [x] 회사는 채용 공고를 등록할 수 있어야 합니다.

- [x] 회사는 채용 공고를 수정할 수 있어야 합니다. (단 회사 ID 제외)

- [x] 회사는 채용 공고를 삭제할 수 있어야 합니다.

### 사용자

- [x] 사용자는 채용 공고 목록을 확인할 수 있어야 합니다.

- [x] 사용자는 채용 공고를 검색할 수 있어야 합니다. (가산점)

- [x] 사용자는 채용상세 페이지를 확인할 수 있어야 합니다.

  - [x] 해당 회사가 올린 다른 채용 공고 확인 (가산점)

- [x] 사용자는 채용공고에 지원할 수 있어야 합니다. (가산점)

## 커밋 컨벤션

### 태그 목록

- Feat : 새로운 기능을 추가하는 경우
- Fix : 버그를 고친경우
- Docs : 문서를 수정한 경우
- Style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
- Refactor : 코드 리펙토링
- Chore : 빌드 업무 수정, 패키지 매니저 수정
- Rename : 파일명(or 폴더명) 을 수정한 경우
- Remove : 코드(파일) 의 삭제가 있을 때.
- Add : 코드나 테스트, 예제, 문서등의 추가 생성이 있는경우
- Move : 코드의 이동이 있는경우
- Comment : 필요한 주석 추가 및 변경
