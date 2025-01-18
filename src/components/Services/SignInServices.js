import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const CreateUser = (userData) => {
    return axiosInstance.post('/api/users/', userData);
};

// Export the API functions
const SignInApis = {
    CreateUser,
};

export default SignInApis;
