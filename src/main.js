import { fetchImages } from "./js/pixabay-api.js";
import {
    renderGallery,
    clearGallery,
    showLoader,
    hideLoader
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (event) => {
    event.preventDefault();


    const query = event.target.elements.value.trim();


    if (!query) {
        iziToast.warning({
            message: "Please enter a search word!",
            position: "topRight"
        });
        return;
    }


    clearGallery(gallery);
    showLoader(loader);

    try {
        const images = await fetchImages(query);


        if (!images || images.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
            return;
        }


        renderGallery(images, gallery);

    } catch (error) {

        iziToast.error({
            message: "Error loading images. Please try again later.",
            position: "topRight"
        });
        console.error(error);
    } finally {

        hideLoader(loader);
        event.target.reset();
    }
});

