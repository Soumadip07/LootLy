import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [active, setActive] = useState("Product");
    const menuItems = [
        { title: "Overview", icon: "grid_view", slug: "#" },
        { title: "Analytics", icon: "bar_chart", slug: "#" },
        { title: "Product", icon: "storefront", slug: "product-form" },
        { title: "Sales", icon: "shopping_cart", slug: "#" },
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

    return (
        <aside className="sidebar">
            <div className="menu-section">
                <h4>Main Menu</h4>
                <ul className='d-flex flex-column gap-2'>
                    {menuItems.map((item) => (
                        <li
                            key={item.title}
                            className={active === item.title ? "active d-flex  gap-2" : " d-flex gap-2"}
                            onClick={() => setActive(item.title)}
                        >
                            <span className="material-icons-outlined">{item.icon}</span>
                            <Link to={`/${item?.slug}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-section my-3">
                <h4>Transaction</h4>
                <ul className='d-flex flex-column gap-2'>
                    {transactions.map((item) => (
                        <li
                            key={item.title}
                            className={active === item.title ? "active d-flex  gap-2" : " d-flex gap-2"}
                            onClick={() => setActive(item.title)}
                        >
                            <span className="material-icons-outlined">{item.icon}</span>
                            <Link to={`/${item?.slug}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-section my-3">
                <h4>General</h4>
                <ul className='d-flex flex-column gap-2'>
                    {general.map((item) => (
                        <li
                            key={item.title}
                            className={active === item.title ? "active d-flex  gap-2" : " d-flex gap-2"}
                            onClick={() => setActive(item.title)}
                        >
                            <span className="material-icons-outlined">{item.icon}</span>
                            <Link to={`/${item?.slug}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
