import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import CreateProductForm from '../Product/CreateProductForm'

function Admin() {
    return (
        <div className='d-flex'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
                <CreateProductForm />
            </div>
        </div>
    )
}

export default Admin
