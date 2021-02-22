# TO-DO Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

It's important to create an environment variable named `REACT_APP_API_URL` via shell script, server config (Heroku, DigitalOcean, etc) or creating an `.env.local` file for development purposes. In our case, it's `REACT_APP_API_URL=https://bs-todo-api.herokuapp.com`

Make sure to run `npm install` to install all the dependencies needed via `package.json`

### Local

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Remote

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

In our case, it's available via Netlify.
