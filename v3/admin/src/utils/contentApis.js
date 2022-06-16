import axios from 'axios';

export const isDev = process.env.NODE_ENV === 'development';
export const baseUrl = isDev ? "http://localhost:1337" : ""

export const getModels = () => {
  return axios.get(`${baseUrl}/content-type-builder/content-types`)
    .then((response) => {
      let result = []
      response.data.data.forEach(element => {
        if (element.uid.indexOf('application') === 0)
          result.push(element)

      });
      return result
    }).catch(() => {
      return [];
    });
};

export const fetchAll = (content) => {
  return axios.get(`${baseUrl}/${content}`)
    .then(e => e.data)
    .catch(() => {
      return false
    });
}