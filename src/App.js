import Line from "./components/apexcharts/Line";

function App() {

  const chartHeight = 300;
  const seriesData = [10, 20, 30, 40, 50, 60, 70];
  const seriesName = 'Test Name';
  const toolbarOptions = { show: true };
  const colorSet = ['#fccb00'];
  const categories = ['월', '화', '수', '목', '금', '토', '일'];
  const title = 'Test Title';
  const titleStyle = { fontSize: 20 };

  return (
    <>
      <Line
        chartHeight={chartHeight}
        seriesData={seriesData}
        seriesName={seriesName}
        toolbarOptions={toolbarOptions}
        colorSet={colorSet}
        categories={categories}
        title={title}
        titleStyle={titleStyle}
      />
    </>
  );
}

export default App;
