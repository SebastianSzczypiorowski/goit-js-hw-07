import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const ul = document.createElement("ul");

ul.classList.add("gallery__list");

gallery.append(ul);

const imageMarkup = galleryItems.map(
  (e) =>
    `<li><img class="img" src="${e.preview}" alt="${e.description}" /></li>`
);

ul.insertAdjacentHTML("beforeend", imageMarkup);

const largeImage = galleryItems.original;
const instance = basicLightbox.create(`<img src="${largeImage}">`);

function modalWindow(e) {
  e.preventDefault;

  instance.show();
}

gallery.addEventListener("click", modalWindow);

// const largeImage = document.querySelector("img").dataset.source;
// const instance = basicLightbox.create(`<img src="${largeImage}">`);
// function selectImage(event) {
//   event.preventDefault();
//   event.target = instance.show();
// }
// gallery.addEventListener("click", selectImage);
