import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async event => {
    event.preventDefault();

    const query = event.target.elements["search-text"].value.trim();

    if (!query) {
        iziToast.warning({
            message: "Please enter a search word!"
        });
        return;
    }

    gallery.innerHTML = "";
    showLoader();

    try {
        const images = await fetchImages(query);

        if (!images || images.length === 0) {
            iziToast.error({
                message:
                    "Sorry, there are no images matching your search query. Please try again!"
            });
            return;
        }

        renderGallery(images, gallery);

    } catch (error) {
        iziToast.error({
            message: "Error loading images"
        });
        console.error(error);
    } finally {
        hideLoader();
    }
});

function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}