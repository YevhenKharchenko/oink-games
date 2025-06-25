import Swiper from 'swiper';
import 'swiper/css/bundle';

const advantagesLeftArrow = document.getElementById('advantagesLeftArrow');
const advantagesRightArrow = document.getElementById('advantagesRightArrow');

let advantagesSwiper;

advantagesSwiper = new Swiper('.advantages-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 3,
  centeredSlides: false,
  initialSlide: 0,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    init: () => {
      document
        .querySelector('.advantages-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateAdvantagesArrows(this);
    },
  },
});

updateAdvantagesArrows(advantagesSwiper);

function updateAdvantagesArrows(swiper) {
  advantagesLeftArrow.disabled = swiper.isBeginning;
  advantagesRightArrow.disabled = swiper.isEnd;
}

advantagesLeftArrow.addEventListener('click', () => {
  advantagesSwiper.slidePrev();
});

advantagesRightArrow.addEventListener('click', () => {
  advantagesSwiper.slideNext();
});
