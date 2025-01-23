import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const CreateUser = (userData) => {
    return axiosInstance.post('/api/users/', userData);
};
const RegisterUser = (userData) => {
    return axiosInstance.post('/api/v1/auth/register', userData);
};

// Export the API functions
const SignInApis = {
    CreateUser,
    RegisterUser
};

export default SignInApis;
