import React from 'react'
import Chart from 'react-apexcharts'

const Line = ({ chartHeight, seriesData, seriesName, toolbarOptions, colorSet, categories, title, titleStyle }) => {
    return (
        <>
            <Chart
                className={'chart-line'}
                height={chartHeight}
                type={'line'}
                series={[
                    {
                        name: seriesName,
                        data: seriesData,
                    },
                ]}
                options={{
                    chart: {
                        id: 'basic-line',
                        toolbar: toolbarOptions,
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    tooltip: {
                        enabled: true,
                    },
                    xaxis: {
                        categories: categories,
                    },
                    title: {
                        text: title,
                        style: titleStyle,
                    },
                    colors: colorSet
                }}
            />
        </>
    )
}

export default Line