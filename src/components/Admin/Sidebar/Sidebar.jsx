import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen, toggleSidebar }) {


    const menuItems = [
        { title: "Overview", icon: "grid_view", slug: "overview" },
        { title: "Analytics", icon: "bar_chart", slug: "analytics" },
        { title: "Product", icon: "storefront", slug: "product-form" },
        { title: "Sales", icon: "shopping_cart", slug: "sales" },
        { title: "Profile", icon: "badge", slug: "seller-details" }
    ];

    const transactions = [
        { title: "Payment", icon: "credit_card", slug: "#" },
        { title: "Refunds", icon: "receipt", slug: "#" },
        { title: "Invoice", icon: "description", slug: "#" },
        { title: "Returns", icon: "undo", slug: "#" },
    ];


    const general = [
        { title: "Notifications", icon: "notifications", slug: "#" },
        { title: "Feedback", icon: "flag", slug: "#" },
        { title: "Setting", icon: "settings", slug: "#" },
        { title: "Dark Mode", icon: "visibility", slug: "#" },
    ];

    // console.log(isOpen)
    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-toggle" onClick={toggleSidebar}>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </div>
                <div className="menu-section">
                    <h4>{isOpen ? "Main Menu" : ""}</h4>
                    <ul className='d-flex flex-column justify-content-start align-items-start gap-2'>
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <NavLink
                                    to={`${item.slug}`}
                                    className={({ isActive }) =>
                                        `d-flex gap-2 justify-content-start align-items-start ${isActive ? "active" : ""}`
                                    }
                                >
                                    <span className="material-icons-outlined">{item.icon}</span>
                                    <span className={`menu-text ${isOpen ? "visible" : "hidden"}`}>{item.title}</span>
                                    {!isOpen && <span className="tooltip">{item.title}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="menu-section">
                    <h4>{isOpen ? "Main Menu" : ""}</h4>
                    <ul className='d-flex flex-column justify-content-start align-items-start gap-2'>
                        {menuItems.map((item) => (
                            <li
                                key={item.title}
                                className={active === item.title ? "active d-flex gap-2 justify-content-start align-items-start" : "d-flex gap-2 justify-content-start align-items-start"}
                                onClick={() => handleNavigation(item.slug, item.title)}
                            >
                                <span className="material-icons-outlined">{item.icon}</span>
                                <span className={`menu-text ${isOpen ? "visible" : "hidden"}`}>{item.title}</span>
                                {!isOpen && <span className="tooltip">{item.title}</span>}
                            </li>
                        ))}
                    </ul>
                </div> */}

                <div className="menu-section my-2">
                    <h4>{isOpen ? "Transaction" : ""}</h4>
                    <ul className='d-flex flex-column justify-content-start align-items-start gap-2'>
                        {transactions.map((item) => (
                            <li key={item.title}>
                                {item.slug !== "#" ? (
                                    <NavLink
                                        to={item.slug}
                                        className={({ isActive }) =>
                                            `d-flex gap-2 justify-content-start align-items-start ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <span className="material-icons-outlined">{item.icon}</span>
                                        <span className={`menu-text ${isOpen ? "visible" : "hidden"}`}>{item.title}</span>
                                        {!isOpen && <span className="tooltip">{item.title}</span>}
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        to={"#"}
                                        className="d-flex gap-2 justify-content-start align-items-start disabled"
                                    >
                                        <span className="material-icons-outlined">{item.icon}</span>
                                        <span className={`menu-text ${isOpen ? "visible" : "hidden"}`}>{item.title}</span>
                                        {!isOpen && <span className="tooltip">{item.title}</span>}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="menu-section">
                    <h4>{isOpen ? "General" : ""}</h4>
                    <ul className="d-flex flex-column justify-content-start align-items-start gap-2">
                        {general.map((item) => (
                            <li key={item.title}>
                                {item.slug !== "#" ? (
                                    <NavLink
                                        to={item.slug}
                                        className={({ isActive }) =>
                                            `d-flex gap-2 justify-content-start align-items-start ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <span className="material-icons-outlined">{item.icon}</span>
                                        <span className={`menu-text ${isOpen ? "visible" : "hidden"}`}>{item.title}</span>
                                        {!isOpen && <span className="tooltip">{item.title}</span>}
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        to={"#"}
                                        className="d-flex gap-2 justify-content-start align-items-start disabled"
                                    >
                                        <span className="material-icons-outlined">{item.icon}</span>
                                        <span className={`menu-text ${isOpen ? "visible" : "hidden"}`}>{item.title}</span>
                                        {!isOpen && <span className="tooltip">{item.title}</span>}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* <div className='profile-tab'>
                    <div>

                        <h2>John Doe</h2>
                        <p>John@gmail.com</p>
                    </div>
                </div> */}
            </aside>
        </>
    );
}

export default Sidebar;
