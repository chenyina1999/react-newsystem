import React, { useEffect, useState } from 'react'
import GridLayout from "react-grid-layout";
import EChartComponent from '../echartComponent/EChartComponent';
import 'react-grid-layout/css/styles.css';  // 确保路径正确
import { Card, Button, message } from 'antd';
import axiosInstance from "@/api/axiosInstance";
import "@/utils/utils.js";
import { useResizeDetector } from 'react-resize-detector';
import {
    SaveOutlined
} from '@ant-design/icons';
export default function Drag() {
    const [messageApi, contextHolder] = message.useMessage();
    const [layout, setLayout] = useState([]);
    const [loading, setLoading] = useState(true);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: '保存成功',
          });
        // Dismiss manually and asynchronously
        // setTimeout(messageApi.destroy, 2500);
    };

    const onLayoutChange = (newLayout) => {
        setLayout(newLayout);
    }
    const dataArray = [
        {
            type: 'line', data: [[1, 820], [2, 932], [3, 901], [4, 934], [5, 1290], [6, 1330], [7, 1320]],
            xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        { type: 'pie', data: [{ value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1548, name: '搜索引擎' }] },
        { type: 'bar', data: [[1, 120], [2, 132], [3, 101], [4, 134], [5, 90], [6, 230], [7, 210]], xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
    ];
    const fetchLayout = async () => {
        try {
            const res = await axiosInstance.get('layouts/1');
            if (res.status === 200) {
                const layout = res.data.layout || [];
                setLayout(layout);
                setLoading(false);

            }
        } catch (error) {
            console.error('Error fetching layout:', error);
        }
    }
    const saveEditLayout = async () => {
        let hideLoadingMessage; // 用于手动关闭加载消息
        try {
            hideLoadingMessage = messageApi.loading('正在保存...', 0); // duration 为 0 表示不自动关闭
            const res = await axiosInstance.put('layouts/1', { layout: layout });
            if (res.status === 200) {
                console.log(res, 'saveEditLayout success!!!');
                hideLoadingMessage(); // 关闭加载消息
                success(messageApi);
            }
        } catch (error) {
            // l
            if (hideLoadingMessage) {
                hideLoadingMessage(); // 关闭加载消息
            }
            messageApi.error('保存失败，请重试！'); // 显示“保存失败”的消息
            console.error('Error save edit layout: ', error)
        }
    }
    useEffect(() => {
        fetchLayout();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {contextHolder}
            <Button icon={<SaveOutlined />} onClick={saveEditLayout} />
            <GridLayout
                className="layout"
                cols={12}
                rowHeight={30}
                width={1200}
                layout={layout}
                onLayoutChange={onLayoutChange}
            >
                {
                    layout.map((item, index) => (
                        <div key={item.i} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Card
                                title="Default size card"
                                extra={<a href="#">More</a>}
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                bodyStyle={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <EChartComponent
                                    style={{ flex: 1, width: '100%' }}
                                    data={dataArray[index].data}
                                    type={dataArray[index].type}
                                    xAxis={dataArray[index].xAxis} />
                            </Card>

                        </div>
                    ))
                }
            </GridLayout>
        </div>

    )




}

