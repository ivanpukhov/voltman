import axios from 'axios';

const getProductById = async (productId) => {
    try {
        const response = await axios.get(`/product/${productId}`);
        return response.data; // Предполагается, что сервер вернет данные о товаре в формате JSON
    } catch (error) {
        console.error(`Ошибка при получении данных о товаре с id ${productId}: ${error}`);
        return null; // В случае ошибки вернем null или другое значение по умолчанию
    }
};

export default getProductById;
