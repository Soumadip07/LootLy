import { axiosInstance } from '../../utils/AxiosInstance';

const createProductVariant = (productId, productData) => {
    return axiosInstance.post(`/api/product/${productId}/product-variants`, productData);
};
const uploadProductVariantImage = (id, imageData, config) => {
    return axiosInstance.post(
        `/api/product-variants/${id}/image`, imageData, config
    );
};
const ProductVariantService = {
    createProductVariant,
    uploadProductVariantImage
};

export default ProductVariantService;
