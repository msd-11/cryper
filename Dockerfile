FROM node:18-alpine
WORKDIR /opt
COPY . .
RUN npm install
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
