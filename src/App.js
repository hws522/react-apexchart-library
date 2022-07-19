import { RadialBarChart } from './components';

function App() {
  const chartSeries = [10, 30, 50, 70, 90];
  const radialBarLabels = ['test1', 'test2', 'test3', 'test4', 'test5'];
  return (
    <>
      <RadialBarChart chartSeries={chartSeries} radialBarLabels={radialBarLabels} tooltipOptions={[false]} />
    </>
  );
}

export default App;
