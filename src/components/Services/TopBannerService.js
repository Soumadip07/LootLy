import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const createTopBanner = (bannerData) => {
    return axiosInstance.post(`/api/top-banner/`, bannerData);
};

const getAllBanner = () => {
    return axiosInstance.get(`/api/top-banner`);
};

// Export the API functions
const TopBannerService = {
    createTopBanner,
    getAllBanner,
};

export default TopBannerService;
