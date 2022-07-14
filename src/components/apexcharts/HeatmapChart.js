import React from 'react';
import Chart from 'react-apexcharts';

/*
히트맵 차트의 데이터 형식은 다른 축 기반 차트(선/막대)와 동일합니다. 
아래 예는 히트 맵 시리즈에 대해 허용되는 데이터 형식을 보여줍니다. 
dataPoints에 대한 레이블은 labels배열에 별도로 제공되어야 합니다.

series: [
    {
      name: "Series 1",
      data: [{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      }]
    },

위 예제 의 name속성은 y축 레이블이 됩니다. 그리고 xx축 레이블이 됩니다. 데이터 값은 의 y속성으로 표시됩니다 series.data
*/

const HeatmapChart = ({
  chartHeight,
  chartWidth,
  chartSeries,
  toolbarOptions,
  zoomOptions,
  backgroundColor,
  offsetX,
  offsetY,
  sparkLine,
  dataLabelEnabled,
  dataLabelString,
  dataLabelAnchor,
  dataLabelTextStyle,
  dataLabelBackground,
  dataLabelTextShadow,
  chartLegend,
  chartMarker,
  chartNodata,
  chartStroke,
  chartSubtitle,
  tooltipOptions,
  tooltipXAxis,
  tooltipYAxis,
  XAxisOptions,
  YAxisOptions,
  colorSet,
  categories,
  title,
  titleStyle,
  /****************************/
  heatmapRadius,
  heatmapReverse,
  heatmapStroke,
  heatmapColorScale,
  heatmapInverse,
}) => {
  return (
    <>
      <Chart
        className={'chart-heatmap'}
        type={'heatmap'}
        height={chartHeight}
        width={chartWidth}
        series={chartSeries}
        options={{
          plotOptions: {
            heatmap: {
              radius: heatmapRadius, // 히트맵 내부 사각형 반경
              enableShades: true, // 값에 따른 음영 활성화
              shadeIntensity: 0.5, // 음영 강도
              reverseNegativeShade: heatmapReverse,
              // 음수에 대한 음영 반전. 양수는 그대로. 짙은 빨간색이 더 큰 손실을 의미하고 더 어두운 녹색이 더 큰 이익을 의미하는 손익 차트 권장.
              distributed: false,
              // 각 행은 고유한 최저 및 최고 범위를 가지며 색상은 각 시리즈에 대해 음영 처리
              useFillColorAsStroke: heatmapStroke, //히트맵 셀 주위의 획/테두리는 셀 색상과 동일한 색상
              colorScale: {
                ranges: heatmapColorScale,
                // [
                // {
                //   from: 0, // 범위 시작
                //   to: 0, // 범위 끝
                //   color: undefined, // 해당 범위 내 색상
                //   foreColor: undefined, // 데이터 레이블 있을 때, 텍스트 색상
                //   name: undefined, // 범례
                // },
                // ],
                inverse: heatmapInverse, // 수평이 아닌 수직으로 표현
                min: undefined, // 색상 계산을 위한 더 낮은 범위 지정
                max: undefined, // 색상 계산을 위한 더 높은 범위 지정
              },
            },
          },
          chart: {
            id: 'basic-heatmap',
            toolbar: toolbarOptions,
            zoom: zoomOptions,
            background: backgroundColor,
            offsetX: offsetX,
            offsetY: offsetY,
            sparkline: { enabled: sparkLine },
            // animations:{...},
            // brush:{...},
            // defaultLocale: 'en',
            // dropShadow:{...},
            //  fontFamily: 'Helvetica, Arial, sans-serif',
            // foreColor: '#373d3f'.
            // group: undefined or string
            // events: {...},
            // locales:[{...}],
            // parentHeightOffset: 15,
            // redrawOnParentResize: true,
            // redrawOnWindowResize: true,
            // selection:{...},
            // stacked: false,
            // stackType: 'normal',
          },
          dataLabels: {
            enabled: dataLabelEnabled,
            enabledOnSeries: undefined,
            formatter: function (val, opts) {
              return `${val} ${dataLabelString}`;
            },
            textAnchor: dataLabelAnchor,
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: dataLabelTextStyle,
            background: {
              enabled: dataLabelBackground[0],
              foreColor: dataLabelBackground[1],
              padding: 4,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: dataLabelBackground[2],
              opacity: 0.9,
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45,
              },
            },
            dropShadow: {
              enabled: dataLabelTextShadow[0],
              top: 1,
              left: 1,
              blur: 1,
              color: dataLabelTextShadow[1],
              opacity: dataLabelTextShadow[2],
            },
          },
          forecastDataPoints: {
            count: 0,
            fillOpacity: 0.5,
            strokeWidth: undefined,
            dashArray: 4,
          },
          legend: {
            show: chartLegend[0],
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: chartLegend[1],
            horizontalAlign: chartLegend[2],
            floating: false,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 400,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [],
            offsetX: chartLegend[3],
            offsetY: chartLegend[4],
            labels: {
              colors: undefined,
              useSeriesColors: false,
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 12,
              customHTML: undefined,
              onClick: undefined,
              offsetX: 0,
              offsetY: 0,
            },
            itemMargin: {
              horizontal: 5,
              vertical: 0,
            },
            onItemClick: {
              toggleDataSeries: true,
            },
            onItemHover: {
              highlightDataSeries: true,
            },
          },
          markers: {
            size: chartMarker[0],
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: chartMarker[1],
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3,
            },
          },
          noData: {
            text: chartNodata[0],
            align: 'center',
            verticalAlign: chartNodata[1],
            offsetX: chartNodata[2],
            offsetY: chartNodata[3],
            style: {
              color: undefined,
              fontSize: chartNodata[4],
              fontFamily: undefined,
            },
          },
          colors: colorSet,
          stroke: {
            show: chartStroke[0],
            curve: chartStroke[1],
            lineCap: 'butt',
            colors: ['#6c757d'],
            width: chartStroke[2],
            dashArray: chartStroke[3],
          },
          subtitle: {
            text: chartSubtitle[0],
            align: chartSubtitle[1],
            margin: 10,
            offsetX: chartSubtitle[2],
            offsetY: chartSubtitle[3],
            floating: false,
            style: {
              fontSize: chartSubtitle[4],
              fontWeight: 'normal',
              fontFamily: undefined,
              color: chartSubtitle[5],
            },
          },
          theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
              enabled: false,
              color: '#255aee',
              shadeTo: 'light',
              shadeIntensity: 0.65,
            },
          },
          title: {
            text: title,
            style: titleStyle,
          },
          tooltip: {
            enabled: tooltipOptions[0],
            enabledOnSeries: undefined,
            shared: tooltipOptions[1],
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: tooltipOptions[2],
            theme: tooltipOptions[3],
            style: {
              fontSize: tooltipOptions[4],
              fontFamily: undefined,
            },
            onDatasetHover: {
              highlightDataSeries: false,
            },
            x: {
              show: tooltipXAxis[0],
              format: tooltipXAxis[1],
              formatter: undefined,
            },
            y: {
              formatter: (series) => `${series}${tooltipYAxis[0]}`,
              title: {
                formatter: (seriesName) => `${seriesName} ${tooltipYAxis[1]}`,
              },
            },
            z: {
              formatter: undefined,
              title: 'Size: ',
            },
            marker: {
              show: true,
            },
            items: {
              display: 'flex',
            },
            fixed: {
              enabled: false,
              position: 'topRight',
              offsetX: 0,
              offsetY: 0,
            },
          },
          xaxis: {
            type: XAxisOptions[0],
            categories: categories,
            tickAmount: undefined,
            tickPlacement: XAxisOptions[1],
            min: undefined,
            max: undefined,
            range: undefined,
            floating: false,
            decimalsInFloat: undefined,
            overwriteCategories: undefined,
            position: XAxisOptions[2],
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: false,
              hideOverlappingLabels: true,
              showDuplicates: false,
              trim: false,
              minHeight: undefined,
              maxHeight: 120,
              style: {
                colors: [],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
              },
              offsetX: 0,
              offsetY: 0,
              format: undefined,
              formatter: undefined,
              datetimeUTC: true,
              datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
              },
            },
            axisBorder: {
              show: true,
              color: '#78909C',
              height: 1,
              width: '100%',
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: true,
              borderType: 'solid',
              color: '#78909C',
              height: 6,
              offsetX: 0,
              offsetY: 0,
            },

            title: {
              text: undefined,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
              },
            },
            crosshairs: {
              show: true,
              width: 1,
              position: 'back',
              opacity: 0.9,
              stroke: {
                color: '#b6b6b6',
                width: 0,
                dashArray: 0,
              },
              fill: {
                type: 'solid',
                color: '#B1B9C4',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 1,
                opacity: 0.4,
              },
            },
            tooltip: {
              //* x축 tooltip
              enabled: XAxisOptions[3], //* x축 tooltip on/off
              formatter: function (val, opts) {
                return val + '...';
              },
              offsetY: 0,
              style: {
                fontSize: 0,
                fontFamily: 0,
              },
            },
          },
          yaxis: {
            show: YAxisOptions[0], //true
            showAlways: true, //* 범례누르면 사라지는 기능
            showForNullSeries: true, //* 값이 없으면 안보이게 하는 기능
            seriesName: undefined,
            opposite: YAxisOptions[1], //false, //* 축 반대쪽으로
            reversed: YAxisOptions[2], //false, //* 값 역순으로
            logarithmic: false,
            // logBase: 10,
            tickAmount: YAxisOptions[3], //6, //* 간격 수
            min: undefined,
            max: undefined,
            forceNiceScale: false, //* 강제로 값 반올림해서 보기 좋게
            floating: false,
            decimalsInFloat: undefined,
            labels: {
              show: YAxisOptions[4], //true,
              align: 'right',
              minWidth: 0,
              maxWidth: 160,
              style: {
                colors: [],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
              },
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              formatter: (value) => {
                return value;
              },
            },
            axisBorder: {
              show: true,
              color: '#78909C',
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: true,
              borderType: 'solid',
              color: '#78909C',
              width: 6,
              offsetX: 0,
              offsetY: 0,
            },
            title: {
              text: undefined,
              rotate: -90,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-title',
              },
            },
            crosshairs: {
              show: true,
              position: 'back',
              stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0,
              },
            },
            tooltip: {
              enabled: false,
              offsetX: 0,
            },
          },
        }}
      />
    </>
  );
};

HeatmapChart.defaultProps = {
  categories: [],
  chartSeries: [],
  chartHeight: 500,
  chartWidth: '100%',
  toolbarOptions: {
    show: true,
    offsetX: 0,
    offsetY: 0,
    tools: {
      download: true,
      selection: true,
      zoom: true,
      zoomin: true,
      zoomout: true,
      pan: true,
      reset: true | '<img src="/static/icons/reset.png" width="20">',
      customIcons: [],
    },
    export: {
      csv: {
        filename: undefined,
        columnDelimiter: ',',
        headerCategory: 'category',
        headerValue: 'value',
        dateFormatter(timestamp) {
          return new Date(timestamp).toDateString();
        },
      },
      svg: {
        filename: undefined,
      },
      png: {
        filename: undefined,
      },
    },
    autoSelected: 'zoom',
  },
  zoomOptions: {
    enabled: true,
    type: 'x',
    autoScaleYaxis: false,
    zoomedArea: {
      fill: {
        color: '#90CAF9',
        opacity: 0.4,
      },
      stroke: {
        color: '#0D47A1',
        opacity: 0.4,
        width: 1,
      },
    },
  },
  backgroundColor: '#fff',
  offsetX: 0,
  offsetY: 0,
  sparkLine: false,
  title: undefined,
  titleStyle: {
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: undefined,
    color: '#263238',
  },
  dataLabelEnabled: true,
  dataLabelString: '',
  dataLabelAnchor: 'middle',
  dataLabelTextStyle: {
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    colors: undefined,
  },
  dataLabelBackground: [true, '#fff', '#fff'],
  dataLabelTextShadow: [false, '#000', 0.45],
  chartLegend: [true, 'top', 'center', 0, 0],
  chartMarker: [0, 'circle'],
  chartNodata: [undefined, 'middle', 0, 0, 14],
  chartStroke: [true, 'straight', 2, 0],
  chartSubtitle: [undefined, 'center', 0, 0, 12, '#9699a2'],
  tooltipOptions: [true, true, false, 'light', 12],
  tooltipXAxis: [true, 'dd MMM'],
  tooltipYAxis: ['', ''],
  XAxisOptions: ['category', 'on', 'bottom', false],
  YAxisOptions: [true, false, false, 6, true],

  colorSet: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],

  /****************************************************************/
  //* Heatmap plotOptions
  heatmapRadius: 2,
  heatmapReverse: true,
  heatmapStroke: false,
  heatmapInverse: false,
  heatmapColorScale: [],
};

export default HeatmapChart;
