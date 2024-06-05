FROM node:lts as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:1.19.0

COPY conf/conf.d/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf ./usr/share/nginx/html/*

# 위 스테이지에서 생성한 빌드 결과를 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=build /app/build /usr/share/nginx/html/

EXPOSE 3000

# nginx 실행
CMD [ "nginx", "-g", "daemon off;" ] 
