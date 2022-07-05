# react-apexchart-library



<p align="center"><img src="https://apexcharts.com/media/react-apexcharts.png"></p>  
      
<p align="center">
  <a href="https://www.npmjs.com/package/react-apexchart-library"><img src="https://img.shields.io/npm/dt/react-apexchart-library.svg" alt="dt"></a>
  <a href="https://www.npmjs.com/package/react-apexchart-library"><img src="https://img.shields.io/npm/v/react-apexchart-library.svg" alt="ver"></a>
</p>  
    




<br>

react + apexchart 를 쉽게 시작하기 위해 제작했습니다.

Easy to get started with react + apexchart.

<br>

apexchart 종류 별로 업데이트 예정이며, 현재는 Line Chart, Bar Chart, Area Chart, Bubble Chart 가 업데이트 된 상태 입니다.

It will be updated for each apexchart type, and the Line Chart, Bar Chart, Area Chart, Bubble Chart is currently updated.

<br>
<br>

## Download and Installation

##### Installing via npm

```
npm i react-apexchart-library
```

## Usage

```jsx
import {LineChart, BarChart, AreaChart, BubbleChart} from 'react-apexchart-library'
```


<br>


최소한의 구성으로 기본적인 라인 차트 만들려면 아래와 같이 진행하세요. 

To create a basic line chart with minimal configuration, proceed as follows:

```jsx
function App() {
  const chartSeries = [
    {
      name: 'Test Name1',
      data: [10, 30, 50, 70, 90, 10, 30],
    },
    {
      name: 'Test Name2',
      data: [20, 40, 60, 80, 20, 40, 60],
    }
  ];
  const categories = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'];
  return (
    <>
      <LineChart // or <BarChart />, <AreaChart /> ... etc
        chartSeries={chartSeries}
        categories={categories}
      />
    </>
  );
}

export default App;
```

<br>


아래와 같이 차트가 렌더링 됩니다.

This will render the following chart.

![image](https://user-images.githubusercontent.com/59306143/175777172-2c8a87ad-78e0-4bca-a5a7-3dabeadfef0e.png)

<br>
<br>

Bubble Chart 에서는 Series 설정을 다르게 해야 합니다.

In case of Bubble Chart, you need to set the Series differently.

```jsx
function App() {
  const bubbleRadius = [10, 100];
  const chartSeries = [{
    name: 'Bubble1',
    data: [[10, 10, 10], [20, 20, 20], [30, 30, 30]]
  },
  {
    name: 'Bubble2',
    data: [[50, 50, 50], [60, 60, 60], [70, 70, 70]]
  },
  {
    name: 'Bubble3',
    data: [[40, 40, 40], [80, 80, 80], [90, 90, 90]]
  },
  {
    name: 'Bubble4',
    data: [[26, 26, 26], [73, 73, 73], [81, 81, 81]]
  }];

  //* data: [[x: number => xAxis, y: number => yAxis, z: number => size]]
  return (
    <>
      <BubbleChart
        chartSeries={chartSeries}
        bubbleRadius={bubbleRadius}
        dataLabelEnabled={false}
      />
    </>
  );
}
```

<br>
<br>

## Props

| Prop                    | Type             | Default                                                 | Description                                         |
| :---------------------- | ---------------- | ------------------------------------------------------- | --------------------------------------------------- |
| **chartSeries**         | Array            | []                                                      | chart data series                                   |
| **chartHeight**         | Number/String    | '500px'                                                 | chart height                                        |
| **chartWidth**          | Number/String    | '100%'                                                  | chart width                                         |
| **backgroundColor**     | String           | '#fff'                                                  | chart background color                              |
| **offsetX**             | Number           | 0                                                       | chart offset X Axis                                 |
| **offsetY**             | Number           | 0                                                       | chart offset Y Axis                                 |
| **sparkLine**           | Boolean          | false                                                   | Helps to visualize data in small areas              |
| **title**               | String/Undefined | undefined                                               | chart title                                         |
| **titleStyle**          | Object           | fontSize, fontWeight, color ...etc                      | chart title style                                   |
| **dataLabelEnabled**    | Boolean          | true                                                    | chart label                                         |
| **dataLabelString**     | String           | ''                                                      | chart label suffix                                  |
| **dataLabelAnchor**     | String           | 'middle'                                                | chart label anchor position                         |
| **dataLabelTextStyle**  | Object           | fontSize, fontWeight, color ...etc                      | chart label style                                   |
| **dataLabelBackground** | Array            | [true, '#fff', '#fff']                                  | [used/unused, foreColor, borderColor]               |
| **dataLabelTextShadow** | Array            | [false, '#000', 0.45]                                   | [enabled, color, opacity]                           |
| **chartLegend**         | Array            | [true, 'top', 'center', 0, 0]                           | [show, position, horizontalAlign, offsetX, offsetY] |
| **chartMarker**         | Array            | [0, 'circle']                                           | [size, shape]                                       |
| **chartNodata**         | Array            | [undefined, 'middle', 0, 0, 14]                         | [text, verticalAlign, offsetX, offsetY, fontSize]   |
| **chartStroke**         | Array            | [true, 'straight', 2, 0]                                | [show, curve, width, dashArray]                     |
| **chartSubtitle**       | Array            | [undefined, 'center', 0, 0, 12, '#9699a2']              | [text, align, offsetX, offsetY, color]              |
| **tooltipOptions**      | Array            | [true, true, false, 'light', 12]                        | [enabled, shared, fillSeriesColor, theme, fontSize] |
| **tooltipXAxis**        | Array            | [true, 'dd MMM']                                        | [show, format]                                      |
| **tooltipYAxis**        | Array            | ['', '']                                                    | [tooltip y axis suffix, tooltip y axis title suffix]                             |
| **XAxisOptions**        | Array            | ['on', 'bottom', false]                                 | [tickPlacement, position, tooltip enabled]          |
| **YAxisOptions**        | Array            | [true, false, false, 6, true]                                 | [show, opposite, reversed, tickAmount, labels show]          |
| **colorSet**            | Array            | ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'] | color format                                        |
| **toolbarOptions**      | Object           | show, offsetX, offsetY, ... etc                         |                                                     |
| **zoomOptions**         | Object           | enabled, type, autoScaleYaxis, ... etc                  |                                                     |

<br>



## Chart PlotOptions Props

<br>

### BarChart

| Prop                   | Type    | Default               | Description                                   |
| ---------------------- | ------- | --------------------- | --------------------------------------------- |
| **barHorizontal**      | Boolean | false                 | Bar chart type Horizontal or Vertical         |
| **barBorderRadius**    | Number  | 0                     | Bar Border Radius                             |
| **barColumnWidth**     | String  | '70%'                 | Bar width                                     |
| **barRangeColor**      | Array   | [0, 0, undefined]     | [range from, range to, color]                 |
| **barBackgroundStyle** | Array   | [[], 1, 0]            | [['color',...], opacity, radius]              |
| **barDataLabels**      | Array   | ['top', 'horizontal'] | [data label position, data label orientation] |



<br>

### AreaChart

| Prop           | Type   | Default  | Description                                                  |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| **areaFillTo** | String | 'origin' | 'origin' or 'end' : When negative values are present in the area chart, fill the area |



<br>

### BubbleChart

| Prop           | Type   | Default  | Description                                                  |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| **bubbleRadius** | Array | [undefined, undefined] | [minBubbleRadius, maxBubbleRadius] |

