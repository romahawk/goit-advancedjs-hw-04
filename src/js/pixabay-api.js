import axios from 'axios';
import { showToast } from './render-functions';

export const DEFAULT_LIMIT = 15;

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '51053384-5356fc0331195a75022768729',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: DEFAULT_LIMIT,
};

export async function getPictures(query, page = 1) {
  return await axios
    .get('/', {
      params: {
        q: query,
        page,
      },
    })
    .catch(error => {
      console.error(error.message);
      showToast('Oops! Something went wrong.');
    });
}
