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

function modalWindow(e) {
  e.preventDefault;
  const img = document.querySelector(".img");
  const largeImg = img.getAttribute("src");
  console.log(largeImg);
  const instance = basicLightbox.create(`<h1>Elo</h1>`);

  instance.show();
}

gallery.addEventListener("click", modalWindow);
