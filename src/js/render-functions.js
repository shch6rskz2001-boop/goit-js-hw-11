import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});

export function renderGallery(images, gallery) {

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

    gallery.insertAdjacentHTML("beforeend", markup);

    lightbox.refresh();
}