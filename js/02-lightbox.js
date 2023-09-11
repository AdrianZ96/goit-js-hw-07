import { galleryItems } from './gallery-items.js'; 

document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');

   
    galleryItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.alt = item.description;

        link.appendChild(image);
        listItem.appendChild(link);
        galleryList.appendChild(listItem);
    });

    
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
    });

});