| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-grid.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-grid.svg?style=flat-square)

[![xy-grid](https://nodei.co/npm/xy-grid.png)](https://npmjs.org/package/xy-grid)

# xy-grid

> 这是`antd`中`grid`组件得直接拷贝, 内容应该放置在`col`内, 并且只有`col`可以作为`row`得直接元素

24 栅格布局, 基于行(row) 和 列(col)来排版.

## 安装

```bash
# yarn
yarn add xy-grid utils-hooks classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "xy-grid";
ReactDOM.render(
    <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
    </Row>,
    container,
);
```

## API

### Row

| 属性    | 说明                      | 类型                                                  | 默认值 |
| ------- | ------------------------- | ----------------------------------------------------- | ------ |
| gutter  | 栅格间隔                  | number/Partial<Record<Breakpoint, number>>            | 无     |
| type    | 布局模式                  | "flex"                                                | 无     |
| justify | flex 布局下的水平排列方式 | "start"/"end"/"center"/"space-around"/"space-between" | 无     |
| align   | flex 布局下得垂直对齐方式 | "top"/"middle"/"bottom"                               | 无     |

### Col

| 属性   | 说明                                   | 类型             | 默认值 |
| ------ | -------------------------------------- | ---------------- | ------ |
| span   | 栅格占位格数                           | number           | 无     |
| pull   | 栅格向左移动格数                       | number           | 无     |
| push   | 栅格向右移动格数                       | number           | 无     |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number           | 无     |
| order  | flex 布局模式下得栅格顺序              | number           | 无     |
| xs     | <576px 响应式栅格                      | number/ColConfig | 无     |
| sm     | ≥576px 响应式栅格                      | number/ColConfig | 无     |
| md     | ≥768px 响应式栅格                      | number/ColConfig | 无     |
| lg     | ≥992px 响应式栅格                      | number/ColConfig | 无     |
| xl     | ≥1200px 响应式栅格                     | number/ColConfig | 无     |
| xxl    | ≥1600px 响应式栅格                     | number/ColConfig | 无     |

## ColConfig

```ts
/**
 * xs 小于 576px
 */
/**
 * sm 大于等于 576px
 */
/**
 * md 大于等于 768px
 */
/**
 * lg 大于等于 992px
 */
/**
 * xl 大于等于 1200px
 */
/**
 * xxl 大于等于 1600px
 */
export type Breakpoint = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
export type BreakpointMap = Partial<Record<Breakpoint, string>>;

/**
 * 列布局配置
 */
export interface ColConfig {
    /**
     * 栅格占位格数
     * @description 为 0 时相当于 display: none
     */
    span?: number;
    /**
     * 栅格向左移动格数
     */
    pull?: number;
    /**
     * 栅格向右移动格数
     */
    push?: number;
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset?: number;
    /**
     * flex 布局模式下得栅格顺序
     */
    order?: number;
}
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
