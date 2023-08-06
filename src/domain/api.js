import axios from 'axios';

const urls = {
  randomAdvice: 'https://api.adviceslip.com/advice',
};

export const callAPI = async (endpoint, method, headers = {}, params = {}, data = {}) => {
  const options = {
    url: endpoint, // Add the proxy URL here
    method,
    headers,
    data,
    params,
  };

  return axios(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const getRandomAdvice = () =>
  callAPI(urls.randomAdvice, 'get', {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  });
