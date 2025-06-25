import axios from 'axios';
import { showToast } from './render-functions';

export const DEFAULT_LIMIT = 15;

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '50351330-2fc0fc2b1e2442bcaa307ce6b',
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
