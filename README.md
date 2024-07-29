# First - Nginx - Docker - NodeJS

- NodeJS
- Nginx
- Docker

## Thiết Lập Dự Án
1. Thay đổi file `.env.example` thành `.env`.

## Chạy Dự Án
- `npm install`
- `npm start` hoặc `node index.js`
- Chạy với port: `localhost:3000`

## Build và Chạy Docker
- `docker-compose build` (Lệnh này dùng để build Docker lên **Docker Images**)
- `docker-compose up` (Lệnh này dùng để chạy và hoàn tất Docker lên **Docker Containers**)
- Chạy với port: `localhost:80:80` tương đương với `localhost`
