
export function swipers() {
    // !!!!!!!!!!читать далее!!!!!!!!!!!!!


    function initializeSwipers() {
        const slider1 = new Swiper('.slider1', {
                loop: true,
                pagination: {
                    el: '.slider1 .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slider1 .swiper-button-next',
                },
                spaceBetween: 20, // Установите нужное расстояние между слайдами в пикселях
                slidesPerView: 1.25, // Количество слайдов, отображаемых одновременно
        });
  
        const slider2 = new Swiper('.slider2', {
                loop: true,
                pagination: {
                    el: '.slider2 .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slider2 .swiper-button-next',
                },
                spaceBetween: 20, // Установите нужное расстояние между слайдами в пикселях
                slidesPerView: 1.25, // Количество слайдов, отображаемых одновременно
        });
  
  
  
        const swiper_container1 = new Swiper('.swiper-container1', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.slider3 .swiper-pagination',
                clickable: true,
              },
            // slidesPerView: 1.25,
        });
        const swiper_container2 = new Swiper('.swiper-container2', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.slider3 .swiper-pagination',
                clickable: true,
              },
        });
        const swiper_container3 = new Swiper('.swiper-container3', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.slider3 .swiper-pagination',
                clickable: true,
              },
        });
        swiper_container1.on('slideChange', function () {
              swiper_container2.slideTo(swiper_container1.activeIndex);
              swiper_container3.slideTo(swiper_container1.activeIndex);
        });
  
        swiper_container2.on('slideChange', function () {
              swiper_container1.slideTo(swiper_container2.activeIndex);
              swiper_container3.slideTo(swiper_container2.activeIndex);
        });
        swiper_container3.on('slideChange', function () {
              swiper_container2.slideTo(swiper_container3.activeIndex);
              swiper_container1.slideTo(swiper_container3.activeIndex);
        });
      }
  
  
  
      function checkWindowSize() {
              // Проверка ширины окна для мобильных устройств (например, < 768px)
              if (window.innerWidth < 340) {
                  initializeSwipers();
              }
          }
      window.addEventListener('load', checkWindowSize);
  

    console.log('swipers');
}

