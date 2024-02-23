FROM node:18-alpine AS builder
WORKDIR /opt
COPY . .
RUN npm install
RUN npm run build 

FROM nginx:1.25-alpine-slim AS runner
COPY --from=builder /opt/dist /usr/share/nginx/html
