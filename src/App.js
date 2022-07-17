import { LineChart, BarChart, BubbleChart, BoxPlotChart, CandlestickChart, HeatmapChart, PieChart, PolarAreaChart } from './components';

function App() {
  const chartSeries = [44, 55, 13, 43, 22];
  const polarLabels = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'];

  return (
    <>
      <PolarAreaChart chartSeries={chartSeries} polarLabels={polarLabels} dataLabelEnabled={false} />
    </>
  );
}

export default App;
