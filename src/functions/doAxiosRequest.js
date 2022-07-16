import axios from 'axios';

const doAxiosRequest = async (method, url, data) => {
    try {
        const response = await axios({
            method,
            url,
            data,
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default doAxiosRequest;