import React from 'react'
import img from '../assets/prod1.jpeg';
function TableDynamic({ data }) {
    // console.log(data?.[0]?.product)
    return (
        <div className='card p-4 shadow-sm rounded'>
            <div className="table-responsive">

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Sales</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data?.map((productItem, index) => (
                            <tr key={index}>
                                <th scope="row" ><input type='checkbox' className="form-check-input"></input></th>
                                <td>{productItem?.product}
                                    <img src={img} alt="product-image" style={{ width: 30, height: 30 }} />
                                </td>
                                <td>{productItem?.sales}</td>
                                <td>{productItem?.revenue?.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableDynamic
