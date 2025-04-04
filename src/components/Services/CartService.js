import { axiosInstance } from '../../utils/AxiosInstance';

const AddtoCart = (userId, productId, quantity) => {
    return axiosInstance.post(`api/cart/user/${userId}/product/${productId}?quantity=${quantity}`);
};
const GetCartItemsByUser = (userId) => {
    return axiosInstance.get(`/api/cart/user/${userId}`);
};
const UpdateCartItem = (userId, productId, quantity) => {
    return axiosInstance.put(`api/cart/user/${userId}/product/${productId}?quantity=${quantity}`);

}

const CartService = {
    AddtoCart,
    GetCartItemsByUser,
    UpdateCartItem
};

export default CartService;
