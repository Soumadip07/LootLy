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
const getProductBySlug = (slug) => {
    return axiosInstance.get(
        `/api/products/slug/${slug}`,
    );
};
const getProductByUserId = (userId) => {
    return axiosInstance.get(
        `/api/user/${userId}/products`,
    );
}
const updateProduct = (productId, productData) => {
    return axiosInstance.put(
        `/api/products/${productId}`, productData
    );
};
// Export the API functions
const ProductsApis = {
    getProducts,
    createProduct,
    uploadProductImage,
    getProductById,
    getProductBySlug,
    getProductByUserId,
    updateProduct,
};

export default ProductsApis;
