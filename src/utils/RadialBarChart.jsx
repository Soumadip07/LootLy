import React from "react";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Product 01",
        sales: 3200,
        revenue: 52010,
        fill: "#8884d8", // Purple for Product 01
    },
    {
        name: "Product 02",
        sales: 1200,
        revenue: 68000,
        fill: "#82ca9d", // Green for Product 02
    },
];

export default function RadialChartComponent() {
    return (
        <div className="card p-4 shadow-sm rounded">
            <h5 className="fw-bold">Product Sales Statistics</h5>

            {/* Growth Indicator */}
            <p className="text-muted">
                Great results with{" "}
                <span className="text-success fw-bold">
                    <span className="material-symbols-outlined">trending_up</span> 12%
                </span>{" "}
                vs last month
            </p>

            {/* Radial Chart */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ResponsiveContainer width={300} height={260}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={15}
                        data={data}
                    >
                        <RadialBar minAngle={15} background clockWise dataKey="sales" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>

            {/* Legend & Sales Info */}
            {/* <div className="mt-3">
                {data.map((item, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        <span
                            style={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: item.fill,
                                borderRadius: "50%",
                                display: "inline-block",
                                marginRight: "8px",
                            }}
                        ></span>
                        <div>
                            <p className="m-0 text-muted">{item.name}</p>
                            <h5 className="fw-bold">${item.revenue.toLocaleString()}</h5>
                            <small className="text-muted">{item.sales} sales</small>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
