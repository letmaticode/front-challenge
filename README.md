# Front

## Dependencies
 - Node
 - NPM

## Instructions
 - Clone repo
 - cd to project folder
 - Install Node y NPM usando NVM. Version 12 en adelante
 - --- yarn install or npm install
 - cp .env.example .env
 - Configure the API route

## SO Windows
 - Edit package.json section "scripts"."start" with:
 `"start": "react-scripts start",`
 - Edit manually `src/environment.js`. Dont use `window._env_.REACT_APP_PRODUCTION`
 - DONT COMMIT CHANGES

## Dev Run with Yarn
 - yarn start
 - Access https://localhost:3000
## Dev Run with Npm
 - npm run start
 - Access https://localhost:3000

## Storybook Run
 - npm run storybook or yarn storybook
 - Access https://localhost:9009

## Prod Build
 - npm run build or yarn build

## Docker 

### Build
sudo docker build -t front .

### Run
sudo docker run --name front -p 3000:80 front

add "-d" to run in background

### Run with different variables
sudo docker run -p 3000:80 -e REACT_APP_API=https://backend.com.ar front

### Info
https://github.com/kunokdev/cra-runtime-environment-variables
