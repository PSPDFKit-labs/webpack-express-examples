This example only runs an express server on port 3000 that uses the webpack-dev-middleware to build the files according to the `webpack.config.js` instructions
and the webpack-hot-middleware for hot-reload.

## Prerequisites

- [Nodejs](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Install and run

In the root directory type

```
yarn
yarn start
```

Open [http://localhost:3000](http://localhost:3000). If you change your files in `client/src` your browser tab is going to reload and show your changes immediately.