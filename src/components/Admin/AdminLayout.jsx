
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AdminLayout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <>
            <Header />
            <div className='d-flex'>
                {/* Sidebar */}
                <div className={`${isOpen ? 'col-lg-2 col-md-3 col-sm-4' : 'col-lg-1 col-md-1 col-sm-2'}`}>
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Dynamic Content */}
                <div className={`${isOpen ? 'col-lg-10 col-md-9 col-sm-8' : 'col-lg-11 col-md-11 col-sm-10'}`}>
                    <Outlet /> {/* This will render the child route component */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AdminLayout;
