import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
galleryItems.forEach((e) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href="${e.original}">
    <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
  </a>`
  );
});
let lightbox = new SimpleLightbox(`.gallery a`, {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", lightbox);
