# build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:22-alpine

WORKDIR /app

# install the serve package globally
RUN npm i -g serve 

# the main mechanism is hence from the build reference we copy the dist folder and put the file in this dist. 
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]