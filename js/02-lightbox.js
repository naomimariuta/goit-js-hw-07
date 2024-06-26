import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
	const listItem = document.createElement("li");
	listItem.classList.add("gallery__item");
	listItem.innerHTML = `
  <a class='gallery__link' href='${item.original}'>
    <img class="gallery__image"
    src='${item.preview}'
    data-source='${item.original}'
    alt='${item.description}' />
  </a>
  `;
	listEl.append(listItem);
});

listEl.addEventListener("click", openImageInModal);

function openImageInModal(event) {
	event.preventDefault();

	const lightBox = new SimpleLightBox(".gallery a", {
		captionPosition: "center",
		captionsData: "alt",
		captionDelay: 150,
	});
}
