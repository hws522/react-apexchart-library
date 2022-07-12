import React from 'react'
import Chart from 'react-apexcharts'

/*
BoxPlot 데이터 형식
boxPlot의 데이터 형식은 다른 차트와 약간 다릅니다. 
ApexCharts는 데이터가 아래 예와 같이 [Min, Q1, Median, Q3, Max] 형식이라고 가정합니다.

xy 형식
xy 형식은 [{ x: category/date, y: [min, q1, median, q3, max] }]

최소값, 중앙값 및 최대값만 시각화할 수도 있습니다.

*/

const BoxPlotChart = ({
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
    boxPlotColors,
}) => {
    return (
        <>
            <Chart
                className={'chart-boxPlot'}
                type={'boxPlot'}
                height={chartHeight}
                width={chartWidth}
                series={chartSeries}
                options={{
                    plotOptions: {
                        boxPlot: {
                            colors: {
                                upper: boxPlotColors[0],
                                lower: boxPlotColors[1],
                            }
                        }
                    },
                    chart: {
                        id: 'basic-boxPlot',
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
                            return `${val} ${dataLabelString}`
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
                                opacity: 0.45
                            }
                        },
                        dropShadow: {
                            enabled: dataLabelTextShadow[0],
                            top: 1,
                            left: 1,
                            blur: 1,
                            color: dataLabelTextShadow[1],
                            opacity: dataLabelTextShadow[2]
                        }
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
                            useSeriesColors: false
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
                            offsetY: 0
                        },
                        itemMargin: {
                            horizontal: 5,
                            vertical: 0
                        },
                        onItemClick: {
                            toggleDataSeries: true
                        },
                        onItemHover: {
                            highlightDataSeries: true
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
                            sizeOffset: 3
                        }
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
                            fontFamily: undefined
                        }
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
                            color: chartSubtitle[5]
                        },
                    },
                    theme: {
                        mode: 'light',
                        palette: 'palette1',
                        monochrome: {
                            enabled: false,
                            color: '#255aee',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
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
                        // custom: undefined,
                        fillSeriesColor: tooltipOptions[2],
                        theme: tooltipOptions[3],
                        style: {
                            fontSize: tooltipOptions[4],
                            fontFamily: undefined
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
                            title: 'Size: '
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
                            offsetY: 0
                        },
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#78909C',
                            height: 6,
                            offsetX: 0,
                            offsetY: 0
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
                        tooltip: { //* x축 tooltip
                            enabled: XAxisOptions[3], //* x축 tooltip on/off
                            formatter: function (val, opts) {
                                return val + "..."
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
                        opposite: YAxisOptions[1],//false, //* 축 반대쪽으로
                        reversed: YAxisOptions[2],//false, //* 값 역순으로
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
                            formatter: (value) => { return value },
                        },
                        axisBorder: {
                            show: true,
                            color: '#78909C',
                            offsetX: 0,
                            offsetY: 0
                        },
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#78909C',
                            width: 6,
                            offsetX: 0,
                            offsetY: 0
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
                    }
                }}
            />
        </>
    )
}

BoxPlotChart.defaultProps = {
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
            customIcons: []
        },
        export: {
            csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString()
                }
            },
            svg: {
                filename: undefined,
            },
            png: {
                filename: undefined,
            }
        },
        autoSelected: 'zoom'
    },
    zoomOptions: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: false,
        zoomedArea: {
            fill: {
                color: '#90CAF9',
                opacity: 0.4
            },
            stroke: {
                color: '#0D47A1',
                opacity: 0.4,
                width: 1
            }
        }
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
        color: '#263238'
    },
    dataLabelEnabled: true,
    dataLabelString: '',
    dataLabelAnchor: 'middle',
    dataLabelTextStyle: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: undefined
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
    //* BoxPlot plotOptions
    boxPlotColors: ['#e9ecef', '#f8f9fa'],
}

export default BoxPlotChart