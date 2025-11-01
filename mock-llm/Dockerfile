FROM node:20-alpine
RUN apk add --no-cache wget
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production
COPY server.js ./
EXPOSE 8080
CMD ["node", "server.js"]