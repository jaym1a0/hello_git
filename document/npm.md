npm学习笔记

## 一、什么是npm脚本？

npm允许在packet.json使用scripts定义命令

```c
{
  // ...
  "scripts": {
    "build": "node build.js"
  }
}
```

上面代码是packet.json的一个片段，里面的scripts是一个对象，它的每一个属性，对应一段脚本。可以在命令行下使用`npm run`来执行这段脚本。

```c
npm run build
//两者相同
node build.js
```

可以使用`npm run`查看packet.json中定义的所有命令。

## 二、原理

每次执行npm run的时候，就会自动新建一个shell，在这个shell里执行指定的脚本命令，该shell会将当前目录下的node_modules/.bin/子目录加到PATH环境变量中，执行结束后，再将PATH恢复原样。

## 三、缩写形式

- `npm start`是`npm run start`
- `npm stop`是`npm run stop`的简写
- `npm test`是`npm run test`的简写
- `npm restart`是`npm run stop && npm run restart && npm run start`的简写

## 四、变量

可以通过npm_package_获取package.json中的字段，下面是一个package.json

```
{
  "name": "foo", 
  "version": "1.2.5",
  "scripts": {
    "view": "node view.js"
  }
}
```

通过npm_package_name可以获取foo，通过npm_package_scripts_view可以获取`node view.js`

```
// view.js
console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5
console.log(process.env.npm_package_scripts_view); // node view.js
```

## 五、相关使用命令

npm install: 安装模块到node_modules目录

npm install --force

npm update

npm view react

npm show react

npm v react

npm info react

npm config get cache

```
# npm-proxy-cache
$ npm --proxy http://localhost:8080 \
  --https-proxy http://localhost:8080 \
  --strict-ssl false \
  install

# local-npm
$ npm set registry http://127.0.0.1:5080

# npm-lazy
$ npm --registry http://localhost:8080/ install socket.io
```

## 参考链接

http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

http://www.ruanyifeng.com/blog/2016/01/npm-install.html