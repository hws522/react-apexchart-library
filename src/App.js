import { LineChart, BarChart, BubbleChart, BoxPlotChart, CandlestickChart, HeatmapChart, PieChart } from './components';

function App() {
  const chartSeries = [44, 55, 13, 43, 22];
  const pieLabels = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'];

  return (
    <>
      <PieChart chartSeries={chartSeries} pieLabels={pieLabels} />
    </>
  );
}

export default App;
