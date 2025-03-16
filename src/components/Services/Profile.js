import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const uploadProfileImage = (profileId, imageData) => {
    return axiosInstance.post(
        `/api/profiles/image/upload/${profileId}`,
        imageData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
};

const createProfileDetails = (userId, profielData) => {
    return axiosInstance.post(`/api/profiles/user/${userId}`, profielData);
};



// Export the API functions
const ProfileService = {
    uploadProfileImage,
    createProfileDetails
};

export default ProfileService;
