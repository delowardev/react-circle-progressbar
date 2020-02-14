# React Circular Progressbar

A circular progressbar component, built with SVG and extensively customizable

<Preview>
  <Story name="Introduction">
	  <Basic></Basic>
  </Story>
</Preview>


## Installation

Install with yarn:
```
yarn add react-circular-progressbar
```
or npm:
```
npm install --save react-circular-progressbar
```

## props

props description here

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| size | Circle height & Width | `180` | Int | ∞ |
| strokeWidth | Circle Stroke width |  `15`  | Int | ∞ |
| strokeWidthBg | Circle Stroke Background width |  `15`  | Int | ∞ |
| fillColor | Stroke Fill Color |  `#288feb`  | String | N/A |
| emptyColor | Stroke (empty) Background Fill Color |  `#288feb`  | String | N/A |
| background | Circle Background |  `none`  | String | N/A |
| className | Component Custom Class |  `''`  | String | N/A |
| percent | Fill Percent |  `55`  | Int | 100 |
| linecap | Stroke Line Style |  `round`  | String | N/A |
| isGradient | Enable/Disable Gradient |  `false`  | Boolean | N/A |
| gradient | Gradient Essential Values | [{...}](#propsgradient)  | Object | N/A |
| isShadow | Enable/Disable Circle Shadow |  `false`  | Boolean | N/A |
| shadow | Shadow Essential Values | [{...}](#propsshadow)  | Object | N/A |
| isBgShadow | Enable/Disable Circle Background Shadow |  `false`  | Boolean | N/A |
| bgShadow | Shadow Essential Values | [{...}](#propsbgshadow)  | Object | N/A |


## props.gradient

props description here

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| angle | Gradinet Angle | `0` | Int | 0-360 |
| start | Color Start from | `0` | Int | 0-100 |
| end | Color End to | `100` | Int | 0-100 |
| startColor | Gradient Start Color | `#ff0000` | String | N/A |
| stopColor | Gradient Stop Color | `#ffff00` | String | N/A |


## props.shadow

props description here

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| inset | Set Shadow Inset or Outset | `false` | Boolean | N/A |
| vertical | Shadow Vertical Offset | `3` | Int | ∞ |
| horizontal | Shadow Horizontal Offset | `0` | Int | ∞ |
| blur | Shadow Blur | `0` | Int | ∞ |
| opacity | Shadow Opacity | `.4` | Float | 0-1 |
| color | Shadow Color | `#000000` | String | 0-1 |


## props.bgShadow

props description here

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| inset | Set Shadow Inset or Outset | `false` | Boolean | N/A |
| vertical | Shadow Vertical Offset | `3` | Int | ∞ |
| horizontal | Shadow Horizontal Offset | `0` | Int | ∞ |
| blur | Shadow Blur | `0` | Int | ∞ |
| opacity | Shadow Opacity | `.4` | Float | 0-1 |
| color | Shadow Color | `#000000` | String | 0-1 |


## Default Props

props description here

```javascript

const defaultProps = {
    size: 180,
    strokeWidth: 15,
    strokeWidthBg: 15,
    fillColor: '#288feb',
    emptyColor: '#dddddd',
    background: 'none',
    className: '',
    percent: 55,
    linecap: 'round',
    isGradient: false,
    gradient: {
        angle: 0,
        start: 0,
        end: 100,
        startColor: '#ff0000',
        stopColor: '#ffff00',
    },
    isShadow: false,
    shadow: {
        inset: false,
        vertical: 10,
        horizontal: 0,
        blur: 10,
        opacity: .5,
        color: '#000000'
    },
    isBgShadow: false,
    bgShadow: {
        inset: true,
        vertical: 3,
        horizontal: 0,
        blur: 3,
        opacity: .4,
        color: '#000000'
    }
}
```
