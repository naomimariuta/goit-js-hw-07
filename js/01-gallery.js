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

const instance = basicLightbox.create(
	`
		<img width="1400" height="900" src="">
	`,
	{
		onShow: () => {
			document.addEventListener("keydown", closeModal);
		},
		onClose: () => {
			document.removeEventListener("keydown", closeModal);
		},
	}
);

listEl.addEventListener("click", openImageInModal);

function openImageInModal(event) {
	event.preventDefault();
	const clickedOn = event.target;

	if (clickedOn.nodeName !== "IMG") {
		return;
	}
	instance.element().querySelector("img").src = clickedOn.dataset.source;

	instance.show();
}

function closeModal(event) {
	if (event.code === "Escape") {
		instance.close();
	}
}
