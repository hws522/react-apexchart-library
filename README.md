# react-apexchart-library

<p align="center"><img src="https://apexcharts.com/media/react-apexcharts.png"></p>  
      
<p align="center">
  <a href="https://www.npmjs.com/package/react-apexchart-library"><img src="https://img.shields.io/npm/dt/react-apexchart-library.svg" alt="dt"></a>
  <a href="https://www.npmjs.com/package/react-apexchart-library"><img src="https://img.shields.io/npm/v/react-apexchart-library.svg" alt="ver"></a>
  <a href="https://github.com/hws522/react-apexchart-library"><img src="https://img.shields.io/badge/-give%20me%20star👍-lightgrey"><img src="https://img.shields.io/github/stars/hws522/react-apexchart-library?style=social"></a>
</p>

<br>

react + apexchart 를 쉽게 시작하기 위해 제작했습니다.

Easy to get started with react + apexchart.

<br>

apexchart 종류 별로 업데이트 예정이며, 현재는 Line Chart, Bar Chart, Area Chart, Bubble Chart, BoxPlot Chart, Candlestick Chart, Heatmap Chart, Pie Chart, PolarArea Chart, Radar Chart, Radial Bar Chart, TreeMap Chart 가 업데이트 된 상태 입니다.

It will be updated for each apexchart type, and the Line Chart, Bar Chart, Area Chart, Bubble Chart, BoxPlot Chart, Candlestick Chart, Heatmap Chart, Pie Chart, PolarArea Chart, Radar Chart, Radial Bar Chart, TreeMap Chart is currently updated.

<br>
<br>

## Download and Installation

##### Installing via npm

```
npm i react-apexchart-library
```

## Usage

```jsx
import {
  LineChart,
  BarChart,
  AreaChart,
  BubbleChart,
  BoxPlotChart,
  CandlestickChart,
  HeatmapChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  RadialBarChart,
  TreeMapChart,
} from 'react-apexchart-library';
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
    },
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
  const chartSeries = [
    {
      name: 'Bubble1',
      data: [
        [10, 10, 10],
        [20, 20, 20],
        [30, 30, 30],
      ],
    },
    {
      name: 'Bubble2',
      data: [
        [50, 50, 50],
        [60, 60, 60],
        [70, 70, 70],
      ],
    },
    {
      name: 'Bubble3',
      data: [
        [40, 40, 40],
        [80, 80, 80],
        [90, 90, 90],
      ],
    },
    {
      name: 'Bubble4',
      data: [
        [26, 26, 26],
        [73, 73, 73],
        [81, 81, 81],
      ],
    },
  ];

  //* data: [[x: number => xAxis, y: number => yAxis, z: number => size]]
  return (
    <>
      <BubbleChart chartSeries={chartSeries} bubbleRadius={bubbleRadius} dataLabelEnabled={false} />
    </>
  );
}
```

<br>
<br>

BoxPlot Chart 에서는 Series 설정을 다르게 해야 합니다.

In case of BoxPlot Chart, you need to set the Series differently.

```jsx
function App() {
  const chartSeries = [
    {
      data: [
        {
          x: 'Category A',
          y: [54, 66, 69, 75, 88],
        },
        {
          x: 'Category B',
          y: [43, 65, 69, 76, 81],
        },
        {
          x: 'Category C',
          y: [31, 39, 45, 51, 59],
        },
        {
          x: 'Category D',
          y: [39, 46, 55, 65, 71],
        },
        {
          x: 'Category E',
          y: [29, 31, 35, 39, 44],
        },
        {
          x: 'Category F',
          y: [41, 49, 58, 61, 67],
        },
        {
          x: 'Category G',
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ];

  //* [{ x: category/date, y: [min, q1, median, q3, max] }]
  return (
    <>
      <BoxPlotChart chartSeries={chartSeries} dataLabelEnabled={false} zoomOptions={{ enabled: false }} />
    </>
  );
}
```

<br>
<br>

Candlestick Chart 에서는 Series 설정을 다르게 해야 합니다.

In case of Candlestick Chart, you need to set the Series differently.

```jsx
function App() {
  const chartSeries = [{
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        ...
      ]
    }];

  /*
  The multi-dimensional array:
  [[Timestamp], [O, H, L, C]]

  single array:
  [Timestamp, O, H, L, C]

  xy format:
  [{ x: date, y: [O,H,L,C] }]
  */

  return (
    <>
      <CandlestickChart
        chartSeries={chartSeries}
        dataLabelEnabled={false}
        XAxisOptions={['datetime']}
      />
    </>
  );
}
```

<br>
<br>

Heatmap Chart 에서는 Series 설정을 다르게 해야 합니다.

In case of Heatmap Chart, you need to set the Series differently.

```jsx
function App() {
  const chartSeries = [
    {
      name: 'Metric 1',
      data: [
        {
          x: 'W1',
          y: 22,
        },
        {
          x: 'W2',
          y: 29,
        },
        ...etc,
      ],
    },
    {
      name: 'Metric 2',
      data: [
        {
          x: 'W1',
          y: 22,
        },
        {
          x: 'W2',
          y: 29,
        },
        ...etc,
      ],
    },
    ...etc,
  ];

  const heatmapColorScale = [
    {
      from: 0,
      to: 20,
      name: 'low',
      color: '#2196F3',
    },
    {
      from: 21,
      to: 40,
      name: 'medium',
      color: '#4CAF50',
    },
    {
      from: 41,
      to: 60,
      name: 'high',
      color: '#FFC107',
    },
    {
      from: 61,
      to: 80,
      name: 'extreme',
      color: '#FF5722',
    },
    {
      from: 81,
      to: 100,
      name: 'max',
      color: '#9C27B0',
    },
  ];

  return (
    <>
      <HeatmapChart chartSeries={chartSeries} dataLabelEnabled={false} heatmapColorScale={heatmapColorScale} />
    </>
  );
}
```

<br>
<br>

Pie Chart 에서는 Series 설정을 다르게 해야 합니다.

In case of Pie Chart, you need to set the Series differently.

```jsx
function App() {
  const chartSeries = [44, 55, 13, 43, 22];
  const pieLabels = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'];

  return (
    <>
      <PieChart chartSeries={chartSeries} pieLabels={pieLabels} />
    </>
  );
}
```

<br>
<br>

PolarArea Chart 는 Pie Chart 와 동일합니다.

PolarArea Chart is the same as Pie Chart.

```jsx
function App() {
  const chartSeries = [44, 55, 13, 43, 22];
  const polarLabels = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'];

  return (
    <>
      <PolarAreaChart chartSeries={chartSeries} polarLabels={polarLabels} dataLabelEnabled={false} />
    </>
  );
}
```

<br>
<br>

Radar Chart 는 Line Chart 와 동일합니다.

Radar Chart is the same as Line Chart.

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
    },
  ];
  const categories = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'];
  return (
    <>
      <RadarChart // or <BarChart />, <AreaChart /> ... etc
        chartSeries={chartSeries}
        categories={categories}
        dataLabelEnabled={false}
      />
    </>
  );
}
```

<br>
<br>

Radial Bar Chart 는 Pie Chart 와 동일합니다.

Radial Bar Chart is the same as Pie Chart.

```jsx
function App() {
  const chartSeries = [10, 30, 50, 70, 90];
  const radialBarLabels = ['test1', 'test2', 'test3', 'test4', 'test5'];
  return (
    <>
      <RadialBarChart chartSeries={chartSeries} radialBarLabels={radialBarLabels} tooltipOptions={[false]} />
    </>
  );
}
```

<br>
<br>
TreeMap Chart 는 Heatmap Chart 와 동일합니다.

TreeMap Chart is the same as Heatmap Chart.

```jsx
function App() {
  const chartSeries = [
    {
      name: 'Desktops',
      data: [
        {
          x: 'ABC',
          y: 10,
        },
        {
          x: 'DEF',
          y: 60,
        },
        {
          x: 'XYZ',
          y: 41,
        },
      ],
    },
    {
      name: 'Mobile',
      data: [
        {
          x: 'ABCD',
          y: 10,
        },
        {
          x: 'DEFG',
          y: 20,
        },
        {
          x: 'WXYZ',
          y: 51,
        },
        {
          x: 'PQR',
          y: 30,
        },
        {
          x: 'MNO',
          y: 20,
        },
        {
          x: 'CDE',
          y: 30,
        },
      ],
    },
  ];

  return (
    <>
      <TreeMapChart chartSeries={chartSeries} dataLabelTextStyle={{ colors: ['#fff'] }} zoomOptions={{ enabled: false }} />
    </>
  );
}
```

<br>
<br>

## Props

| Prop                    | Type             | Default                                                 | Description                                            |
| :---------------------- | ---------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| **chartSeries**         | Array            | []                                                      | chart data series                                      |
| **chartHeight**         | Number/String    | '500px'                                                 | chart height                                           |
| **chartWidth**          | Number/String    | '100%'                                                  | chart width                                            |
| **backgroundColor**     | String           | '#fff'                                                  | chart background color                                 |
| **offsetX**             | Number           | 0                                                       | chart offset X Axis                                    |
| **offsetY**             | Number           | 0                                                       | chart offset Y Axis                                    |
| **sparkLine**           | Boolean          | false                                                   | Helps to visualize data in small areas                 |
| **title**               | String/Undefined | undefined                                               | chart title                                            |
| **titleStyle**          | Object           | fontSize, fontWeight, color ...etc                      | chart title style                                      |
| **dataLabelEnabled**    | Boolean          | true                                                    | chart label                                            |
| **dataLabelString**     | String           | ''                                                      | chart label suffix                                     |
| **dataLabelAnchor**     | String           | 'middle'                                                | chart label anchor position                            |
| **dataLabelTextStyle**  | Object           | fontSize, fontWeight, color ...etc                      | chart label style                                      |
| **dataLabelBackground** | Array            | [true, '#fff', '#fff']                                  | [used/unused, foreColor, borderColor]                  |
| **dataLabelTextShadow** | Array            | [false, '#000', 0.45]                                   | [enabled, color, opacity]                              |
| **chartLegend**         | Array            | [true, 'top', 'center', 0, 0]                           | [show, position, horizontalAlign, offsetX, offsetY]    |
| **chartMarker**         | Array            | [0, 'circle']                                           | [size, shape]                                          |
| **chartNodata**         | Array            | [undefined, 'middle', 0, 0, 14]                         | [text, verticalAlign, offsetX, offsetY, fontSize]      |
| **chartStroke**         | Array            | [true, 'straight', 2, 0]                                | [show, curve, width, dashArray]                        |
| **chartSubtitle**       | Array            | [undefined, 'center', 0, 0, 12, '#9699a2']              | [text, align, offsetX, offsetY, color]                 |
| **tooltipOptions**      | Array            | [true, true, false, 'light', 12]                        | [enabled, shared, fillSeriesColor, theme, fontSize]    |
| **tooltipXAxis**        | Array            | [true, 'dd MMM']                                        | [show, format]                                         |
| **tooltipYAxis**        | Array            | ['', '']                                                | [tooltip y axis suffix, tooltip y axis title suffix]   |
| **XAxisOptions**        | Array            | ['category', 'on', 'bottom', false]                     | [xAxis type, tickPlacement, position, tooltip enabled] |
| **YAxisOptions**        | Array            | [true, false, false, 6, true]                           | [show, opposite, reversed, tickAmount, labels show]    |
| **colorSet**            | Array            | ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'] | color format                                           |
| **toolbarOptions**      | Object           | show, offsetX, offsetY, ... etc                         |                                                        |
| **zoomOptions**         | Object           | enabled, type, autoScaleYaxis, ... etc                  |                                                        |

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

| Prop           | Type   | Default  | Description                                                                           |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------- |
| **areaFillTo** | String | 'origin' | 'origin' or 'end' : When negative values are present in the area chart, fill the area |

<br>

### BubbleChart

| Prop             | Type  | Default                | Description                        |
| ---------------- | ----- | ---------------------- | ---------------------------------- |
| **bubbleRadius** | Array | [undefined, undefined] | [minBubbleRadius, maxBubbleRadius] |

<br>

### BoxPlotChart

| Prop              | Type  | Default                | Description              |
| ----------------- | ----- | ---------------------- | ------------------------ |
| **boxPlotColors** | Array | ['#e9ecef', '#f8f9fa'] | [upperColor, lowerColor] |

<br>

### CandlestickChart

| Prop                 | Type    | Default                | Description                                             |
| -------------------- | ------- | ---------------------- | ------------------------------------------------------- |
| **candlestickColor** | Array   | ['#e9ecef', '#f8f9fa'] | [upwardColor, downwardColor]                            |
| **candlestickWick**  | Boolean | true                   | Candle wick color uses the same color as the body color |

<br>

### HeatmapChart

| Prop                  | Type    | Default | Description                                              |
| --------------------- | ------- | ------- | -------------------------------------------------------- |
| **heatmapRadius**     | Number  | 2       | heatmap square radius                                    |
| **heatmapReverse**    | Boolean | true    | Invert Shading for Negative Numbers                      |
| **heatmapStroke**     | Boolean | false   | Make the heatmap border color the same as the cell color |
| **heatmapColorScale** | Array   | []      | [{from, to, color, foreColor, name},]                    |
| **heatmapInverse**    | Boolean | false   | vertically instead of horizontally                       |
|                       |

<br>

### PieChart

| Prop                      | Type    | Default                      | Description                                         |
| ------------------------- | ------- | ---------------------------- | --------------------------------------------------- |
| **pieType**               | String  | 'pie'                        | pie or donut                                        |
| **pieLabels**             | Array   | []                           | use in category                                     |
| **pieAngles**             | Array   | [0, 360]                     | start and end angles of the pie                     |
| **pieOnClick**            | Boolean | false                        | extension when clicked                              |
| **pieOffset**             | Array   | [0, 0]                       | position coordinates of pie                         |
| **pieLabelOffset**        | Number  | 0                            | labels will move outside / inside of the donut area |
| **pieShowLabelAngle**     | Number  | 10                           | Minimum angle to allow data-labels to show          |
| **donutBackground**       | String  | 'transparent'                | The background color of the pie                     |
| **donutLabelsShow**       | Boolean | false                        | Whether to display internal labels when donut       |
| **donutLabelValueSuffix** | String  | ''                           | The suffix on the label when donut                  |
| **donutTotalShow**        | Boolean | false                        | Whether to show the total value when donut          |
| **donutTotalStyles**      | Array   | ['Total', '22px', '#373d3f'] | [total labels title, font size, font color]         |

<br>

### PolarAreaChart

| Prop                 | Type  | Default        | Description                                                       |
| -------------------- | ----- | -------------- | ----------------------------------------------------------------- |
| **polarLabels**      | Array | []             | use in category                                                   |
| **polarRingStroke**  | Array | [1, '#e8e8e8'] | [Border width of the rings, The line/border color of the rings]   |
| **polarSpokeStroke** | Array | [1, '#e8e8e8'] | [Border width of the spokes, The line/border color of the spokes] |

<br>

### RadarChart

| Prop               | Type  | Default                   | Description                                                                                                           |
| ------------------ | ----- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **radarOffset**    | Array | [0, 0]                    | [offsetX, offsetY]                                                                                                    |
| **radarStroke**    | Array | ['#e8e8e8', '#e8e8e8', 1] | [radar stroke color, radar connector color, stroke width]                                                             |
| **radarFillColor** | Array | undefined                 | The polygons can be filled with a custom color. [2 colors, the colors will be repeated for the rest of the polygons.] |

<br>

### RadialBarChart

| Prop                         | Type    | Default                                 | Description                                                                                                                                                               |
| ---------------------------- | ------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **radialBarLabels**          | Array   | []                                      | use in category                                                                                                                                                           |
| **radialBarInverse**         | Boolean | false                                   | Whether to make the first value of series innermost or outermost                                                                                                          |
| **radialBarAngle**           | Array   | [0, 360]                                | [Angle from which the radialBars should start, end]                                                                                                                       |
| **radialBarOffset**          | Array   | [0, 0]                                  | Sets the offset for radialBars                                                                                                                                            |
| **radialBarHollow**          | Array   | [5, '50%', 'transparent']               | [Spacing which will be subtracted from the available hollow size, Size in percentage relative to the total available size of chart, Background color for the hollow part] |
| **radialBarTrack**           | Array   | [true, undefined, undefined]            | [Show track under the bar lines, track start angle, track end angle]                                                                                                      |
| **radialBarTrackStyle**      | Array   | ['#f2f2f2', '97%', 1, 5]                | [track color, Width of the track, Opacity of the track, Spacing between each track]                                                                                       |
| **radialBarDataLabels**      | Boolean | true                                    | Whether to display labels inside radialBars                                                                                                                               |
| **radialBarDataLabelsName**  | Array   | [true, '16px', 600, undefined, -10]     | [Show the name of the respective bar associated with it’s value, font size, font weight, font color, Sets the top offset for name]                                        |
| **radialBarDataLabelsValue** | Array   | [true, '14px', 400, undefined, 16]      | [Show the value label associated with the name label, font size, font weight, font color, Sets the top offset for name]                                                   |
| **radialBarTotal**           | Array   | [true, 'Total', '#373d3f', '16px', 600] | [Show the total of all the series in the inner area of radialBar, label name, label color, label size, label weight]                                                      |

<br>

### TreeMapChart

| Prop                      | Type    | Default                                                           | Description                                                                                                                                                                                           |
| ------------------------- | ------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **treeMapShades**         | Boolean | true                                                              | Enables color shading based on value.                                                                                                                                                                 |
| **treeMapShadeIntensity** | Number  | 0.5                                                               | intensity of shading                                                                                                                                                                                  |
| **treeMapReverse**        | Boolean | true                                                              | When enabled, it will reverse the shades for negatives but keep the positive shades as it is now.                                                                                                     |
| **treeMapDistribute**     | Boolean | false                                                             | When turned on, colors will be shaded for each series.                                                                                                                                                |
| **treeMapFillStroke**     | Boolean | false                                                             | When turned on, the stroke/border around the treemap cell has the same color as the cell color.                                                                                                       |
| **treeMapColorScale**     | Array   | [{from: 0, to: 0, color: undefined, foreColor: undefined, }, ...] | [{from: Value indicating range’s upper limit, to: Value indicating range’s lower limit, color: Background color to fill the range with, foreColor: Color of the text if data-labels is enabled}, ...] |

<br>
