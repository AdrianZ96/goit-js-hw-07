import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('ul.gallery')

galleryItems.forEach(picture => {
    const item = document.createElement('li');
    item.insertAdjacentHTML(
    'beforeend',
    `<img src="${picture.preview}" alt="${picture.description}" width="340" height="240">`);
    gallery.appendChild(item);

    item.addEventListener("click", () => {
    
    const lightbox = basicLightbox.create(`
            <img src="${picture.original}" alt="${picture.description}">
        `);

        lightbox.show();
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape"|| event.key ==="Esc") {
                lightbox.close();
            }
        });
    });
});
