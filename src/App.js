import LineChart from "./components/apexcharts/LineChart";
import BarChart from "./components/apexcharts/BarChart";

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
      <BarChart
        chartSeries={chartSeries}
        categories={categories}
      />
    </>
  );
}

export default App;
