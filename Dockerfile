FROM node:18-alpine AS builder
ARG VITE_RIDDLE_API_KEY
ENV VITE_RIDDLE_API_KEY=$VITE_RIDDLE_API_KEY
WORKDIR /opt
COPY . .
RUN npm install
RUN npm run build 

FROM nginx:1.25-alpine-slim AS runner
COPY --from=builder /opt/dist /usr/share/nginx/html
