export default function () {
    let servicesSwiper = new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        watchOverflow: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        breakpoints: {
          430: {
            slidesPerView: 1.25,
                spaceBetween: 16,
          },
          576: {
            slidesPerView: 1.25,
              spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.25,
              spaceBetween: 16,
          },
          992: {
            slidesPerView: 1.5,
              spaceBetween: 16,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 0
          },
        },
        navigation: {
          nextEl: ".swiper-navigation-button-next",
          prevEl: ".swiper-navigation-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        on: {
            lock(swiper) {
                swiper.wrapperEl.classList.add('row');
                swiper.wrapperEl.classList.add('row-cols-2');
            },

            unlock(swiper) {
                swiper.wrapperEl.classList.remove('row');
                swiper.wrapperEl.classList.remove('row-cols-2');
            }
        }
      });
}
