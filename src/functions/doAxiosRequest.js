import axios from 'axios';

const doAxiosRequest = (method, url, data) => axios({
    method,
    url,
    data,
});

export default doAxiosRequest;