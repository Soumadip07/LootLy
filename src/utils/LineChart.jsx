import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";
function LineChartDynamic({ data }) {

    return (
        <div className="card p-4 shadow-sm rounded">
            <h5 className="fw-bold">Overall Sales</h5>
            <ResponsiveContainer width={"100%"} height={300}>
                <LineChart data={data} margin={{ top: 20 }} accessibilityLayer>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" />
                    <Line
                        type="monotone"
                        dataKey="month"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    ></Line>
                    <Line type="monotone" dataKey="sales" stroke="#82ca9d"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartDynamic
