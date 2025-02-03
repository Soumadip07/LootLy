import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const getCategories = () => {
    return axiosInstance.get('/api/categories/');
};
const addCategories = (data) => {
    return axiosInstance.post('/api/categories/', data);
};
// Export the API functions
const CategoriesApis = {
    getCategories,
    addCategories,
};

export default CategoriesApis;