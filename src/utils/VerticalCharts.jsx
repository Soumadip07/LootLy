import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
} from "recharts";

function VerticalCharts() {
    const data = [
        {
            name: "Snacks",
            uv: 3000,
            pv: 1398,
            amt: 2210,
            percentage: 50,
        },
        {
            name: "Beverage",
            uv: 2000,
            pv: 9800,
            amt: 2290,
            percentage: 22,
        },
        {
            name: "Spices",
            uv: 2780,
            pv: 3908,
            amt: 2000,
            percentage: 28,
        },
    ];

    return (
        <div className="card p-4 shadow-sm rounded">
            <h5 className="fw-bold">Last 6 months sale</h5>
            <small className='text-muted mb-3'>Showing top sales</small>
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                layout={"vertical"}
                barSize={20}
            >
                <XAxis
                    type="number"
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="percentage" fill="#8884d8" background={{ fill: "#eee" }}>
                    <LabelList
                        dataKey="percentage"
                        position="insideEnd"
                        fill="#fff"
                        fontSize={14}
                    />
                </Bar>
            </BarChart>
        </div>
    );
}

export default VerticalCharts;
