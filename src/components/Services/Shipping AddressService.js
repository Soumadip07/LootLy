import { axiosInstance } from '../../utils/AxiosInstance';

// API function for creating a user
const createShippingAddress = (userId, shipping_Data) => {
    return axiosInstance.post(`/api/shipping-address/user/${userId}`, shipping_Data);
};


// Export the API functions
const ShippingAddressService = {
    createShippingAddress
};

export default ShippingAddressService;
