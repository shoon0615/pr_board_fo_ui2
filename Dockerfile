# 베이스 이미지 선택 (Node.js 최신 LTS 버전)
FROM node:18-alpine

# 작업 디렉토리 생성
WORKDIR /src

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치 (프로덕션 모드)
RUN npm install --omit=dev

# 컨테이너가 시작될 때 실행할 명령어 지정
CMD ["npm", "start"]

# 소스 코드 복사
COPY . .

# EXPOSE 3000