import LineChart from "./components/apexcharts/LineChart";
import BarChart from "./components/apexcharts/BarChart";
import BubbleChart from "./components/apexcharts/BubbleChart";
import BoxPlotChart from "./components/apexcharts/BoxPlotChart";

function App() {
  const chartSeries = [
    {
      data: [
        {
          x: 'Category A',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Category B',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Category C',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Category D',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Category E',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Category F',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Category G',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ];

  return (
    <>
      <BoxPlotChart
        chartSeries={chartSeries}
        dataLabelEnabled={false}
        zoomOptions={{enabled: false}}
      />
    </>
  );
}

export default App;
