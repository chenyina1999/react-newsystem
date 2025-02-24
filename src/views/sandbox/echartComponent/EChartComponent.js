import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ResizeObserver from 'resize-observer-polyfill';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // 导入样式

const EChartComponent = ({ data, type, xAxis, onResize }) => {
    const chartRef = useRef(null);
    const resizeObserver = useRef(null);
    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        if(type === 'line' || type === 'bar') {
            myChart.setOption({
                xAxis: {
                    data: xAxis
                },
                yAxis: {},
                series: [
                    {
                        type: type,
                        data: data
                    }
                ]
            });
        }else {
            myChart.setOption({
                // xAxis: {
                //     data: xAxis
                // },
                // yAxis: {},
                series: [
                    {
                        type: type,
                        data: data
                    }
                ]
            });
        }
        const handleResize = () => {
            requestAnimationFrame(() => {
                myChart.resize();
            })
        }
        resizeObserver.current = new ResizeObserver(
            handleResize
        );
        resizeObserver.current.observe(chartDom);

        return () => {
            resizeObserver.current.unobserve(chartDom);
            myChart.dispose();
        };
    }, [data]);

    return (
        <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
        </div>

    );
};

export default EChartComponent;
