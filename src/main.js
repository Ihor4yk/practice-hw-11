import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";


const form = document.querySelector(".form");

hideLoader();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearGallery();

  const query = String(form.elements["search-text"].value.trim());
  if (!query) {
    iziToast.error({
      position: "topRight",
      message: "Please enter a search term!",
    });
    return;
  }

  showLoader();
  getImagesByQuery(query)
    .then((data) => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: "topRight",
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(() => {
      iziToast.error({
        position: "topRight",
        message: 'Oops! Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
})