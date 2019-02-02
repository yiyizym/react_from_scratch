**目标**
在 2019 年初，从零开始使用 react+redux+react-router 实现一个简单的需要登录的站点页面
  - 可以在登录页面登录，登录成功后跳转到主页
  - 主页需要登录才能看到，未登录时进入主页会重定向到登录页面
  - 在主页可以登出，登出成功则会重定向到登录页面
  - 进入其他页面，会重定向到 404 页面

**记录**

从零到可以运行：

- npm init
- git init
  - .gitignore
- Install dependencies
  - react
  - react-dom
  - react-router-dom
  - redux
  - webpack
    - webpack.config.js
      - mode development
  - webpack-cli
  - babel-loader
    - https://github.com/babel/babel-loader
    - https://babeljs.io/docs/en/babel-preset-react
      - 在这里找到处理 jsx 的 preset
      - .babelrc
  - babel/core
  - babel/preset-env
- /src/index.js/app.js
- /dist/index.html directory
- package.json scripts

处理 react / react-router / redux 的关系:
- react-router
  - https://github.com/ReactTraining/react-router/tree/master/packages/react-router
    - react-router 是实现路由功能的核心
    - 这里说如果是在 web 上用 react-router 应该安装 react-router-dom ，后者会安装 react-router 作为依赖
  - https://github.com/ReactTraining/react-router
    - BrowserRouter 与 HashRouter 的区别
    - 这里有提示到 Redux Integration 看看
      - https://reacttraining.com/react-router/web/guides/redux-integration
      - 有一个 blocked updates 的问题
- redux with react
  - https://redux.js.org/basics/usage-with-react
  - https://react-redux.js.org/
- redux with react-router
  - https://redux.js.org/advanced/usage-with-react-router
    - config server
      - webpack-dev-server
        - https://webpack.js.org/configuration/dev-server/#devserver

搭一个简单的后台:

- expressjs
  - https://expressjs.com/
  - 处理 post 请求: LOGIN / LOGOUT
    - https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
  - run multiple npm scripts 
    - https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel