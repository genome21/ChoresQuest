# Build stage
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/build /app/build
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
