import LineChart from "./components/apexcharts/LineChart";
import BarChart from "./components/apexcharts/BarChart";
import BubbleChart from "./components/apexcharts/BubbleChart";


var _seed = 42;
Math.random = function () {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}


function App() {

  const chartSeries = [{
    name: 'Bubble1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble4',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }];
  const bubbleRadius = [10, 100];
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

export default App;
