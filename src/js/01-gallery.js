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
  if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(
      `<img src = ${e.target.dataset.source}>`
    );
    e.preventDefault;
    console.log(e.target.alt);
    instance.show();
    gallery.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  }
}

gallery.addEventListener("click", modalOpen);
