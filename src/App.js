import LineChart from "./components/apexcharts/LineChart";

function App() {

  const chartHeight = 200;
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
  const toolbarOptions = { show: true };
  const colorSet = ['#fccb00'];
  const categories = ['월', '화', '수', '목', '금', '토', '일'];
  const title = 'Test Title';
  const titleStyle = { fontSize: 20 };
  const zoomOptions = { enabled: false };
  const chartLegend = [true, 'bottom', 'center', 0, 0];
  const chartNodata = ['데이터 없음', 'middle', 0, 0, 40];
  return (
    <>
      <LineChart
        // chartHeight={chartHeight}
        chartSeries={chartSeries}
        // toolbarOptions={toolbarOptions}
        // colorSet={colorSet}
        categories={categories}
        title={title}
        titleStyle={titleStyle}
        // zoomOptions={zoomOptions}
        // chartLegend={chartLegend}
        dataLabelEnabled={false}
        chartNodata={chartNodata}
      />
    </>
  );
}

export default App;
