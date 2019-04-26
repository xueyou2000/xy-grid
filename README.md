# xy-grid

---

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/xy-grid.svg?style=flat-square
[npm-url]: http://npmjs.org/package/xy-grid
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/xy-grid.svg?style=flat-square
[download-url]: https://npmjs.org/package/xy-grid

> 24 栅格布局, 基于行(row) 和 列(col)来排版.

> 这是`antd`中`grid`组件得直接拷贝,

-   内容应该防止在`col`内, 并且只有`col`可以作为`row`得直接元素

## 安装

[![xy-grid](https://nodei.co/npm/xy-grid.png)](https://npmjs.org/package/xy-grid)

| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

```sh
# npm
npm install --save xy-grid utils-hooks classnames

# yarn
yarn add xy-grid utils-hooks classnames
```

## 使用

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "xy-grid";
ReactDOM.render(
    <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
    </Row>,
    container
);
```

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-grid is released under the MIT license.
