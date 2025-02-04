import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AdminLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <div className="admin-layout">
            <Header />
            <div className="content-wrapper d-flex">
                {/* Sidebar */}
                <div className={`${isOpen ? 'col-lg-2 col-md-3 col-sm-4' : 'col-lg-1 col-md-1 col-sm-2'}`}>
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Main Content */}
                <div className={`main-content ${isOpen ? 'expanded' : ''}`}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;
