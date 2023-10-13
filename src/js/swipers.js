// SWIPER GALLERY
const swiperGallery = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
        nextEl: ".btn-gallery-next",
        prevEl: ".btn-gallery-prev",
    },
    
    breakpoints: {
        420: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        
        500: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 35,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
      }
  });

  // SWIPER ARTICLES
const swiperArticles = new Swiper(".articles-swiper", {
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: ".btn-articles-next",
        prevEl: ".btn-articles-prev",
    },
  });
const swiperArticlesAnimation = document.querySelector('.articles-swiper')
Object.assign(swiperArticlesAnimation, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
  });
  swiperArticlesAnimation.initialize()
