const gallerySlides = document.querySelectorAll('.gallery-list-item');
const galleryBtn = document.getElementById('galleryDownArrow');
const galleyBtnIcon = galleryBtn.querySelector('.arrow-icon');
let currentIndex = 0;
let direction = 'forward';

function updateGallerySlides() {
  gallerySlides.forEach((slide, i) => {
    slide.style.display =
      i >= currentIndex && i < currentIndex + 2 ? 'block' : 'none';
  });

  if (currentIndex + 2 >= gallerySlides.length) {
    galleyBtnIcon.style.transform = 'rotate(180deg)';
    direction = 'backward';
  } else if (currentIndex <= 0) {
    galleyBtnIcon.style.transform = 'rotate(0deg)';
    direction = 'forward';
  }
}

galleryBtn.addEventListener('click', () => {
  if (direction === 'forward') {
    currentIndex = Math.min(currentIndex + 2, gallerySlides.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 2, 0);
  }
  updateGallerySlides();
});

updateGallerySlides();
