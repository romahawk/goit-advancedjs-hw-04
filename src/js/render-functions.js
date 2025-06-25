import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightBoxInstance;

function renderGalleryItem({
  src,
  originalSrc,
  description,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${originalSrc}">
                <img
                    class="gallery-image"
                    src="${src}"
                    data-source="${originalSrc}"
                    alt="${description}"
                    width=360
                    height=200
                />

            </a>
            <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${likes}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${views}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${comments}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>`;
}

function getGalleryHtml(images) {
  return images
    .map(
      ({
        webformatURL: src,
        largeImageURL: originalSrc,
        tags: description,
        likes,
        views,
        comments,
        downloads,
      }) =>
        renderGalleryItem({
          src,
          originalSrc,
          description,
          likes,
          views,
          comments,
          downloads,
        })
    )
    .join('');
}

function initLightBox() {
  lightBoxInstance = new SimpleLightbox('.gallery a');

  lightBoxInstance.refresh();
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function appendGallery(gallery, images) {
  const galleryHtml = getGalleryHtml(images);
  gallery.insertAdjacentHTML('beforeend', galleryHtml);
  lightBoxInstance.refresh();
}

export function initGallery(gallery, images) {
  const galleryHtml = getGalleryHtml(images);
  gallery.innerHTML = galleryHtml;

  initLightBox();
}

export function hideElement(element) {
  element.classList.add('hidden');
}

export function showElement(element) {
  element.classList.remove('hidden');
}

export function showToast(message, color = 'red') {
  iziToast.show({
    message,
    color,
    position: 'topRight',
  });
}
