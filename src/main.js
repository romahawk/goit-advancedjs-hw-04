import { getPictures, DEFAULT_LIMIT } from './js/pixabay-api';
import {
  initGallery,
  appendGallery,
  clearGallery,
  hideElement,
  showElement,
  showToast,
} from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const loader = document.querySelector('.loader');
const button = document.querySelector('button');
const addMoreButton = document.querySelector('.add-more');

let query;
let totalPages = 1;
let currentPage = 1;

addMoreButton.addEventListener('click', async () => {
  hideElement(addMoreButton);
  showElement(loader);

  const response = await getPictures(query, ++currentPage);

  if (response?.data) {
    const { hits } = response.data;
    appendGallery(gallery, hits);
    scrollGallery();
    hideElement(loader);

    if (currentPage < totalPages) {
      showElement(addMoreButton);
    }

    if (currentPage === totalPages) {
      showToast(
        "We're sorry, but you've reached the end of search results.",
        'blue'
      );
    }
  }
});

function scrollGallery() {
  const item = document.querySelector('.gallery-item');

  if (item) {
    const { height } = item.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}

function reset() {
  hideElement(addMoreButton);
  totalPages = 1;
  currentPage = 1;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!gallery) return;

  const newQuery = searchInput.value;

  if (newQuery !== query) {
    reset();
  }

  query = newQuery;
  searchInput.value = '';

  if (query) {
    clearGallery(gallery);
    showElement(loader);

    button.setAttribute('disabled', 'disabled');

    const response = await getPictures(query);

    if (response?.data) {
      const { hits, totalHits } = response.data;
      totalPages = Math.ceil(totalHits / DEFAULT_LIMIT);

      if (!hits.length) {
        showToast(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        initGallery(gallery, hits);
      }
    }
    hideElement(loader);
    button.removeAttribute('disabled');

    if (totalPages > 1) {
      showElement(addMoreButton);
    }
  }
});
