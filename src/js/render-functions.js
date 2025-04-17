import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".dual-orbit-spinner");
let lightbox;

export function createGallery(images) {
  const galleryMarkup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image">
      </a>
      <div class="info">
        <div class="info-item">
          <span class="label">Likes</span>
          <span class="value">${likes}</span>
        </div>
        <div class="info-item">
          <span class="label">Views</span>
          <span class="value">${views}</span>
        </div>
        <div class="info-item">
          <span class="label">Comments</span>
          <span class="value">${comments}</span>
        </div>
        <div class="info-item">
          <span class="label">Downloads</span>
          <span class="value">${downloads}</span>
        </div>
      </div>
    </li>`;
  }).join("");

  gallery.innerHTML = galleryMarkup;

  // 🔄 Ініціалізація або оновлення lightbox
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',        // використовує атрибут alt для підпису
      captionDelay: 250,            // затримка перед показом підпису
      captionPosition: 'bottom',    // розташування підпису
      animationSpeed: 300,          // швидкість відкриття/закриття
      fadeSpeed: 300,               // плавне згасання
      slideSpeed: 300,              // плавний перехід між фото
      showCounter: true,            // показує "1 з 10"
      navText: ['←', '→'],          // кастомні стрілки
      enableKeyboard: true          // керування з клавіатури
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("visually-hidden");
}

export function hideLoader() {
  loader.classList.add("visually-hidden");
}