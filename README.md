# CarpoolMATE Frontend

## 로컬 개발환경 구성

### 로컬 https 설정

1. 맨 처음 실행 시 `make initialize` 를 합니다.

   - make가 없을 경우 `brew install make` 로 설치해주세요.
   - 진행 마지막에 노트북 비밀번호를 입력 후 엔터를 입력해야 합니다.

2. `npm run dev` 로 실행합니다.

3. `https://local.carpool.com` 로 들어가면 로컬 개발환경에 접속 할 수 있습니다.
   - 쿠키의 secure 속성을 사용하기 위해 https 환경이 필요합니다. http인 `localhost:3000` 에서는 쿠키가 정상 작동하지 않습니다.
   - 따라서 반드시 상기 url로 접속해 주세요.
