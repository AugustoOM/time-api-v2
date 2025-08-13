FROM node:20-alpine

ENV TZ=America/Argentina/Cordoba
ENV NODE_ENV=production

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY src ./src

EXPOSE 3000
CMD ["node", "src/index.js"]
