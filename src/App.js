import LineChart from "./components/apexcharts/LineChart";
import BarChart from "./components/apexcharts/BarChart";
import BubbleChart from "./components/apexcharts/BubbleChart";

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
