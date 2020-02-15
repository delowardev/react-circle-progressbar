# React Circle Progressbar

Highly customizable & light weight circular progressbar component, built with SVG and extensively customizable

![React Circle Progressbar](https://i.imgur.com/jrLkr2A.png)

### Table of contents

* [Installation](#installation)
* [Usage and Examples](#usage)
* [Props](#props)
* [Gradient (props.gradient)](#propsgradient)
* [Shadow (props.shadow)](#propsshadow)
* [Default Props](#defaultprops)

## Installation

Install with npm:
```
npm install --save @delowar/react-circle-progressbar
```

or yarn:

```
yarn add @delowar/react-circle-progressbar
```

## Usage and Examples

```javascript
import React from 'react';
import Progress from '@delowar/react-circle-progressbar';

// Basic Usage
<Progress />

// Default Gradient
<Progress isGradient />

// Customize Gradient
<Progress 
    isGradient 
    gradient={{
        angle: 90,
        start: 0,
        end: 100,
        startColor: '#ff0000',
        stopColor: '#ffff00'
    }}
/>

// Default Shadow
<Progress isBgShadow />   

// Customize Shadow
<Progress
    isBgShadow 
    bgShadow: {{
        inset: true,
        vertical: 2,
        horizontal: 2,
        blur: 4,
        opacity: .4,
        color: '#000000'
    }}
    emptyColor="#f7f7f7" 
    strokeWidth="6"
    strokeWidthBg="30" 
/>

```

## Props

Available Props, this package supports 30+ props

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

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| angle | Gradinet Angle | `0` | Int | 0-360 |
| start | Color Start from | `0` | Int | 0-100 |
| end | Color End to | `100` | Int | 0-100 |
| startColor | Gradient Start Color | `#ff0000` | String | N/A |
| stopColor | Gradient Stop Color | `#ffff00` | String | N/A |


## props.shadow

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| inset | Set Shadow Inset or Outset | `false` | Boolean | N/A |
| vertical | Shadow Vertical Offset | `3` | Int | ∞ |
| horizontal | Shadow Horizontal Offset | `0` | Int | ∞ |
| blur | Shadow Blur | `0` | Int | ∞ |
| opacity | Shadow Opacity | `.4` | Float | 0-1 |
| color | Shadow Color | `#000000` | String | 0-1 |


## props.bgShadow

| **Names** | **Description** | **Default Value**  | **Type** | **Range/Max**
| ------ | ------ | ------ | ------ | ------ |
| inset | Set Shadow Inset or Outset | `false` | Boolean | N/A |
| vertical | Shadow Vertical Offset | `3` | Int | ∞ |
| horizontal | Shadow Horizontal Offset | `0` | Int | ∞ |
| blur | Shadow Blur | `0` | Int | ∞ |
| opacity | Shadow Opacity | `.4` | Float | 0-1 |
| color | Shadow Color | `#000000` | String | 0-1 |


## Default Props

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
