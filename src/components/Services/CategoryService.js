import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const getCategories = () => {
    return axiosInstance.get('/api/categories/');
};

// Export the API functions
const CategoriesApis = {
    getCategories
};

export default CategoriesApis;