import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
galleryItems.forEach((e) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}
      alt="${e.description}"
    />
  </a>
</div>`
  );
});

function modalOpen(e) {
  event.preventDefault;
  const instance = basicLightbox.create(
    `<img 
    src="${e.target.dataset.source}"
    alt="${e.alt}"/>`
  );

  instance.show();
}

gallery.addEventListener("click", modalOpen);
