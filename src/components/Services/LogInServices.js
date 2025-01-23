import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const LoginUser = (userData) => {
    return axiosInstance.post('/api/v1/auth/login', userData);
};

// Export the API functions
const LoginApis = {
    LoginUser
};

export default LoginApis;
