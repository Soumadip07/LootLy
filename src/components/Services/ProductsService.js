import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const getProducts = (pageNumber = 0, pageSize = 5, sortBy = "productId", sortDir = "ASC") => {
    return axiosInstance.get(
        `/api/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`
    );
};


// Export the API functions
const ProductsApis = {
    getProducts
};

export default ProductsApis;
