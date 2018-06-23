FROM node:8
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3003
CMD [ "npm", "start" ]