[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/eMEHXF4EBU0/0.jpg)](https://www.youtube.com/watch?v=eMEHXF4EBU0)

## Installation 
Run those command bellow

`$ git clone git@github.com:SadiqUltra/tick-tack-toe-frontend.git`

`$ cd tick-tack-toe-frontend`

`$ yarn install`

## Start app
Run those command bellow

`$ yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker
Alternatively we can install via docker too. In `tick-tack-toe-frontend` folder run those command 

`$ docker build -t react-webapp . `

`$ docker run -it -p 8000:80 react-webapp`

Once the container is running, you can open [http://localhost:8000](http://localhost:8000) and you'll be able to access the React app running inside the Docker container

## Test
Run those command bellow

`$ yarn test`


Note: make sure backend in running

Backend repository link: [https://github.com/SadiqUltra/tick-tack-toe-backend](https://github.com/SadiqUltra/tick-tack-toe-backend)
