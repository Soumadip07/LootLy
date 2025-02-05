import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const getProducts = (pageNumber = 0, pageSize = 5, sortBy = "productId", sortDir = "ASC") => {
    return axiosInstance.get(
        `/api/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`
    );
};
const createProduct = (categoryId, userId, productData) => {
    return axiosInstance.post(
        `/api/user/${userId}/category/${categoryId}/products`, productData
    );
};
const uploadProductImage = (productId, imageData, config) => {
    return axiosInstance.post(
        `/api/products/image/upload/${productId}`, imageData, config
    );
};
const getProductById = (productId) => {
    return axiosInstance.get(
        `/api/products/${productId}`,
    );
};

// Export the API functions
const ProductsApis = {
    getProducts,
    createProduct,
    uploadProductImage,
    getProductById
};

export default ProductsApis;
