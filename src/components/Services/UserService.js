import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const getUserbyId = (userId) => {
    return axiosInstance.get(`/api/users/${userId}`);
};


// Export the API functions
const UserService = {
    getUserbyId
};

export default UserService;
