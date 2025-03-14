import React, { useEffect, useState } from 'react'
import Dropdown from '../../utils/Dropdown'
import CreateProductForm from './CreateProductForm';
import { useNavigate } from 'react-router-dom';
import ProductsApis from '../Services/ProductsService';
import Cookies from "js-cookie";
import { discountedPrice, encryptId, formatUnit } from '../../utils/constFunctions';

function ProductPage() {
    const [selectedProductOperation, setSelectedProductOperation] = useState();
    const option = ["Delete created Product", "Update Created Product", "Add Product Variant"];
    const [open, setOpen] = useState(false)
    const [userId, setUserId] = useState(null);
    const [data, setData] = useState();

    useEffect(() => {
        const storedUserId = Cookies.get("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);
    console.log("User ID:", userId);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProductData = async () => {
            if (!userId) return; // Ensure userId exists

            try {
                const response = await ProductsApis.getProductByUserId(userId);
                if (response?.data) {
                    const productData = response.data;
                    console.log(productData, "product")
                    setData(productData);
                }
            } catch (err) {
                console.error("Error fetching product data:", err);
                setError("Failed to fetch product details.");
            }
        };
        if (userId) {
            fetchProductData();
        }
    }, [userId]);

    const handleDropdownChange = (item, slug, id) => {
        setSelectedProductOperation(item);
        console.log(item)
        if (item === "Add New Product") {
            navigate('/admin/product-form');
        }
        if (item === "Delete created Product") {
            navigate(`/admin/delete-product/${slug}`);
        }
        if (item === "Add Product Variant") {
            navigate(`/admin/product-variant/${id}`);
        }
        if (item === "Update Created Product") {
            navigate(`/admin/update-product/${slug}`);
        }
    };

    return (
        <div>
            <button
                className='small-buttons d-flex mb-3 justify-content-center align-items-center p-2'
                onClick={() => handleDropdownChange("Add New Product")}
            >
                Add New Product
            </button>


            <div className='card p-5 shadow-sm rounded h-100vh'>
                <div className="table-responsive">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data?.map((productItem, index) => (
                                <tr key={index}>
                                    <td>{encryptId(productItem?.productId)}</td>
                                    <td>{productItem?.title}
                                    </td>
                                    <td>
                                        <img src={`http://localhost:8082/api/products/image/${productItem?.imageName}`} alt="product-image" style={{ width: 100, height: 90, borderRadius: 5 }} />
                                    </td>
                                    <td>${discountedPrice(productItem?.base_price, productItem?.discount)}</td>
                                    <td>{productItem?.stock}</td>
                                    <td>{formatUnit(productItem?.quantity)}</td>
                                    <td>
                                        <Dropdown
                                            options={option}
                                            onChange={(item) => handleDropdownChange(item, productItem?.productSlug, productItem?.productId)}
                                            placeholder={"Select Product Operation"}
                                            open={open}
                                            setOpen={setOpen}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
