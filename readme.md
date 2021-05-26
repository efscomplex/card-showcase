# [Card Shower](https://github.com/efscomplex/card-showcase) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

This project was bootstrapped with [Webpack Esbuild](https://github.com/efscomplex/webpack-esbuild)

## Project Structure

You will find the _'www'_ folder inside the project source, that's where is placed the main application. In the folder _'lib'_ is placed some react UI components to speed up the development.

All the other folders inside the source (src) conforms the infrastructure of the application, getting an independent module to make api requests.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8090](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn test`

Launches the test runner Jest

### `yarn test:watch`

Launches the test runner Jest in the interactive watch mode

### `yarn build:container`

Build a docker image and run a container with the app running in the 8080 port. You can ckeck it by opening the browser in localhost:8080.

### `yarn docker:start`

Up a server hosted speccially for the container. This command will be fire with the script before inside the container and is executed through the script docker.sh placed in the sripts folder.

## What to improve?

-   SEO
-   Error handling consuming the API
-   Optimization
    -   Overall Performance
    -   Code Splitting
-   Testing
    -   For all _'lib'_ components
    -   hight coverage for app components
-   Well structured global store if the application grows
-   Handle empty fields from a Card form
-   Add a infinity scroll for a bunch of cards
