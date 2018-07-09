# React Router + Webpack + Apollo + Offline Demo

> Demo site with dynamic routing and offline support.

![](./assets/reactrouter-logo.png) ![](./assets/webpack-logo.png) ![](./assets/apollo-logo.png)

In particular, it showcases:

- [x] Dynamic imports with [webpack 4](https://webpack.js.org/).
- [x] Dynamic route loading [with React Router](https://github.com/ReactTraining/react-router).
- [x] web worker-based offline-support and hash-based cache for all resources from domain with [webpack](https://webpack.js.org/) and [offline-plugin](https://github.com/NekR/offline-plugin).
- [ ] GQL queries with and without cache
- [ ] Queuing GQL mutations
- [ ] User-driven and automated app updates

## 🖥 Install

Install required dependencies with:

```shell
$ yarn
```

## 📺 Run demo

To run the demo locally run:

```shell
$ yarn start
```

Alternatively, you can view it live [here](https://obartra.github.io/offline).

## 📦 Bundle

```shell
$ yarn build
```

## TODO

- [ ] cache images and svgs
- [ ] cache fonts
- [ ] add image/svgs to home page
- [ ] add apollo client
- [ ] add fake search / mocks
- [ ] publish bundle as git page
- [ ] add ci
- [ ] showcase queries with and without caching
- [ ] showcase queueing queries
- [ ] showcase queueing mutations by id (allowing replace)
- [ ] allow user to decide when to update
- [ ] force updates on load
