FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
RUN npm i -g serve
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]
