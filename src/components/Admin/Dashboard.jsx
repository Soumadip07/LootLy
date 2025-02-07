import React from "react";
import Chart from "../../utils/Chart";
import RadialChartComponent from "../../utils/RadialBarChart";
import BarChart from "../../utils/BarChart";
import BarCharts from "../../utils/BarChart";
import VerticalCharts from "../../utils/VerticalCharts";

const data = [
    { name: "Feb", product01: 50, product02: 100 },
    { name: "Mar", product01: 200, product02: 400 },
    { name: "Apr", product01: 500, product02: 600 },
    { name: "May", product01: 600, product02: 500 },
    { name: "Jun", product01: 500, product02: 400 },
    { name: "Jul", product01: 800, product02: 600 },
    { name: "Aug", product01: 1200, product02: 700 },
    { name: "Sep", product01: 1000, product02: 500 },
    { name: "Oct", product01: 700, product02: 300 },
    { name: "Nov", product01: 1500, product02: 900 },
];

export default function Dashboard() {
    return (
        <section className="dashboard-section">
            <div className="row d-flex flex-column gap-4 mb-5">
                <div className="d-flex gap-2 justify-content-evenly">
                    <div className="col-3">
                        <div className="card p-3">
                            <h5>Total Revenue</h5>
                            <span className="d-flex gap-4 justify-content-evenly">
                                <h4>$745,000</h4>
                                <span>
                                    <span className="d-flex gap-1">
                                        <span className="material-symbols-outlined text-success">
                                            trending_up
                                        </span>
                                        <b className="text-success">2.5%</b>
                                    </span>
                                    <small className="text-muted">Last week</small>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card p-3">
                            <h5>Total Customers</h5>
                            <span className="d-flex gap-4 justify-content-evenly">
                                <h4>12,350</h4>
                                <span>
                                    <span className="d-flex gap-1">
                                        <span className="material-symbols-outlined text-success">
                                            trending_up
                                        </span>
                                        <b className="text-success">4.8%</b>
                                    </span>
                                    <small className="text-muted">Last week</small>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card p-3">
                            <h5>Total Transactions</h5>
                            <span className="d-flex gap-4 justify-content-evenly">
                                <h4>28,970</h4>
                                <span>
                                    <span className="d-flex gap-1">
                                        <span className="material-symbols-outlined text-danger">
                                            trending_down
                                        </span>
                                        <b className="text-danger">1.2%</b>
                                    </span>
                                    <small className="text-muted">Last week</small>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card p-3">
                            <h5>Total Products</h5>
                            <span className="d-flex gap-4 justify-content-evenly">
                                <h4>5,432</h4>
                                <span>
                                    <span className="d-flex gap-1">
                                        <span className="material-symbols-outlined text-success">
                                            trending_up
                                        </span>
                                        <b className="text-success">3.6%</b>
                                    </span>
                                    <small className="text-muted">Last week</small>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-6">
                    <RadialChartComponent />
                </div>
                <div className="col-lg-6">
                    <div className="card p-4 d-flex justify-content-center align-items-center">
                        <h4>Sales Summary</h4>
                        <Chart data={data} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <BarCharts />
                </div>
                <div className="col-lg-6">
                    <VerticalCharts />
                </div>
            </div>
        </section>
    );
}
