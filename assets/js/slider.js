const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: function () {
      // Проверяем, является ли текущий слайд последним
      if (this.isEnd) {
        // Если слайд последний, скрываем стрелку вперед
        document.querySelector('.swiper-button-next').style.display = 'none';
      } else {
        // Если не последний слайд, показываем стрелку вперед
        document.querySelector('.swiper-button-next').style.display = 'flex';
      }
      
      // Проверяем, является ли текущий слайд первым
      if (this.isBeginning) {
        // Если слайд первый, устанавливаем непрозрачность кнопки назад в 35%
        document.querySelector('.swiper-button-prev').style.opacity = '0';
      } else {
        // Если не первый слайд, показываем кнопку назад
        document.querySelector('.swiper-button-prev').style.opacity = '1';
      }
    },
  },
  breakpoints: {
    // Для планшетов с шириной экрана до 1024 пикселей
    1024: {
      slidesPerView: 2,
    },
    // Для мобильных устройств с шириной экрана до 768 пикселей
    768: {
      slidesPerView: 1,
      navigation: {
        nextEl: '', // Удалить навигацию на мобильных
        prevEl: '',
      },
    },
  },
});
const swiperAbout = new Swiper(".about-slider", {
  slidesPerView: 'auto',
  height: '500px',
  spaceBetween: '35px',
  loop: true,
});