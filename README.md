# react-apexchart-library

react + apexchart 를 쉽게 시작하기 위해 제작했습니다.

Easy to get started with react + apexchart.

<br>

apexchart 종류 별로 업데이트 예정이며, 현재는 Line Chart 가 업데이트 된 상태 입니다.

It will be updated for each apexchart type, and the Line Chart is currently updated.

<br>
<br>

## Download and Installation

##### Installing via npm

```
npm i react-apexchart-library
```

## Usage

```jsx
import {LineChart} from 'react-apexchart-library'
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
      <LineChart
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

## Props
