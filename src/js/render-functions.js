import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

/**
 * Очищає вміст контейнера галереї
 */
export function clearGallery(container) {
  container.innerHTML = "";
}

/**
 * Показує індикатор завантаження
 */
export function showLoader(loader) {
  loader.classList.remove("hidden");
}

/**
 * Приховує індикатор завантаження
 */
export function hideLoader(loader) {
  loader.classList.add("hidden");
}

/**
 * Рендерить картки зображень у галерею
 */
export function renderGallery(images, container) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
      }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <figure class="gallery-figure">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
      <figcaption class="gallery-figcaption">
        <ul class="img-content-wrapper">
          <li>Likes <span>${likes}</span></li>
          <li>Views <span>${views}</span></li>
          <li>Comments <span>${comments}</span></li>
          <li>Downloads <span>${downloads}</span></li>
        </ul>
      </figcaption>
    </figure>
  </a>
</li>
`
    )
    .join("");

  container.insertAdjacentHTML("beforeend", markup);

  // Оновлюємо Lightbox після додавання нових елементів
  lightbox.refresh();
}
