import React from 'react'
import LineChartDynamic from '../../utils/LineChart'
import GaugeChartDynamic from '../../utils/GaugeChartDynamic'
import TableDynamic from '../../utils/TableDynamic'

function Sales() {
    const overAllSalesMonthly = [
        { "month": "Jan", "sales": 2200 },
        { "month": "Feb", "sales": 1800 },
        { "month": "Mar", "sales": 1900 },
        { "month": "Apr", "sales": 2500 },
        { "month": "May", "sales": 2300 },
        { "month": "Jun", "sales": 2700 },
        { "month": "Jul", "sales": 2600 },
        { "month": "Aug", "sales": 2400 },
        { "month": "Sep", "sales": 2200 },
        { "month": "Oct", "sales": 2800 },
        { "month": "Nov", "sales": 3872 },
        { "month": "Dec", "sales": 3100 }
    ]
    const overAllProductSalesMonthly = [{
        "product": "NB Men's Running Shoes",
        "revenue": "$29,938.72",
        "sales": 1572,
        "reviews": 1829,
        "views": 3420
    },
    {
        "product": "Men's Minimalist Watch",
        "revenue": "$19,281.90",
        "sales": 1208,
        "reviews": 1227,
        "views": 2983
    },
    {
        "product": "Maxim Premium T-Shirt",
        "revenue": "$16,430.63",
        "sales": 1985,
        "reviews": 1072,
        "views": 2572
    },
    {
        "product": "Maxim Premium T-Shirt",
        "revenue": "$16,430.63",
        "sales": 1985,
        "reviews": 1072,
        "views": 2572
    },
    {
        "product": "Maxim Premium T-Shirt",
        "revenue": "$16,430.63",
        "sales": 1985,
        "reviews": 1072,
        "views": 2572
    },
    {
        "product": "Maxim Premium T-Shirt",
        "revenue": "$16,430.63",
        "sales": 1985,
        "reviews": 1072,
        "views": 2572
    },
    {
        "product": "Maxim Premium T-Shirt",
        "revenue": "$16,430.63",
        "sales": 1985,
        "reviews": 1072,
        "views": 2572
    }
    ]

    return (
        <section className="analytics-section">
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
            <div className="row mb-3">
                <div className="col-12">
                    <LineChartDynamic data={overAllSalesMonthly} />
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <TableDynamic data={overAllProductSalesMonthly} />
                </div>
                <div className="col-3">
                    <GaugeChartDynamic />
                </div>
            </div>
        </section>
    )
}

export default Sales
