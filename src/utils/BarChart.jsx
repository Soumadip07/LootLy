import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Feb", income: 500, expense: 1000 },
    { name: "Mar", income: 800, expense: 700 },
    { name: "Apr", income: 1500, expense: 1200 },
    { name: "May", income: 400, expense: 900 },
    { name: "Jun", income: 700, expense: 600 },
    { name: "Jul", income: 1800, expense: 1000 },
    { name: "Aug", income: 1600, expense: 800 },
    { name: "Sep", income: 600, expense: 900 },
    { name: "Oct", income: 1200, expense: 1000 },
];

export default function BarCharts() {
    return (
        <div className="card p-4 shadow-sm rounded">
            <h5 className="fw-bold">Allocation Funds</h5>

            {/* Total Value & Growth Indicator */}
            <p className="fs-4 fw-bold">
                $7,342.84{" "}
                <span className="text-success fw-bold">
                    <span className="material-symbols-outlined">trending_up</span> +12%
                </span>
            </p>

            {/* Monthly Dropdown Placeholder */}
            <button className="btn btn-light btn-sm">Monthly ⏷</button>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="expense" fill="#dcdcdc" barSize={15} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="income" fill="#82ca9d" barSize={15} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
