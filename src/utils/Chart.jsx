import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
function Chart({ data }) {
    return (
        <div>
            <AreaChart
                width={470}
                height={300}
                data={data}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis tickFormatter={(value) => `$${value}`} />

                <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                <Tooltip />
                <Legend verticalAlign="top" align="center" />

                <Area
                    type="basis"
                    dataKey="product01"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#DDD3F6"
                    strokeWidth={2}
                    fillOpacity={0.6}
                />

                <Area
                    type="basis"
                    dataKey="product02"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#ECF6F0"
                    strokeWidth={2}
                    fillOpacity={0.6}
                />
            </AreaChart>
        </div>
    )
}

export default Chart
