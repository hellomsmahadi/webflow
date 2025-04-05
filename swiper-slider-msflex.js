// alert("normal slider ");

// Common Swiper options
const commonOptions = {
  spaceBetween: 1,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  speed: 1000,
  zoom: true, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
};

const mousewheelOption = {
  mousewheel: {
    thresholdDelta: 70,
  },
};

// Autoplay options
const autoplayOptions = {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    waitForTransition: true,
  },
};

// Add navigation buttons
const navigationBtn = {
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
};
// Add navigation buttons
const navigationBtn2 = {
  navigation: {
    nextEl: ".swiper-btn-next-2",
    prevEl: ".swiper-btn-prev-2",
  },
};
// Add navigation buttons
const navigationBtn3 = {
  navigation: {
    nextEl: ".swiper-btn-next-3",
    prevEl: ".swiper-btn-prev-3",
  },
};

// Swiper for normal slider with autoplay
const normalSlider = new Swiper(".is-normal-slider", {
  ...commonOptions, // Spread common options here
  centeredSlides: false,
  ...autoplayOptions, // Add autoplay options
  ...navigationBtn, // Add navigation buttons
});

// Swiper for normal slider with autoplay
const normalSlider2 = new Swiper(".is-normal-slider-2", {
  ...commonOptions, // Spread common options here
  ...autoplayOptions, // Add autoplay options
  ...navigationBtn2, // Add navigation buttons
});
// Swiper for normal slider with autoplay
const normalSlider3 = new Swiper(".is-normal-slider-3", {
  ...commonOptions, // Spread common options here
  ...autoplayOptions, // Add autoplay options
  ...navigationBtn3, // Add navigation buttons
});

// // Swiper for marquee slider
// const marqueeSlider = new Swiper(".is-marquee-slider", {
//   // ...commonOptions, // Common options from your original code
//   ...marqueeAutoplayOptions, // Marquee options for smooth scrolling
// });

// Swiper for normal slider without autoplay
const normalSliderWihoutAutoPlay = new Swiper(".is-slider-autoplay-off", {
  ...commonOptions, // Spread common options here
  ...navigationBtn, // Add navigation buttons
});
// Swiper for normal slider without autoplay
const normalSliderWihoutAutoPlay2 = new Swiper(".is-slider-autoplay-off-2", {
  ...commonOptions, // Spread common options here
  ...navigationBtn2, // Add navigation buttons
});

// Swiper for normal slider with autoplay
const normalSliderFade = new Swiper(".is-normal-slider-fade", {
  spaceBetween: 30,
  effect: "fade",
  grabCursor: true,
  ...navigationBtn2, // Add navigation buttons
});

// Swiper for coverflow effect slider with custom effect
const coverflowEffectSlider = new Swiper(".is-coverflow-effect", {
  ...commonOptions, // Spread common options here
  // ...mousewheelOption,
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3.5,
    slideShadows: true,
  },
  ...navigationBtn, // Add navigation buttons here as well
  // No autoplay here for this slider
});

// Swiper for coverflow effect slider with custom effect
const coverflowEffectSlider2 = new Swiper(".is-coverflow-effect-2nd", {
  // Optional parameters
  effect: "coverflow",
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: -16,
  autoHeight: false,
  preloadImages: true,
  loop: true,
  createElements: false,
  centeredSlides: true,
  coverflowEffect: {
    scale: 1,
    stretch: 0,
    depth: 100,
    modifier: 3.5,
    slideShadows: true,
  },
  // Enable lazy loading
  lazy: false,
  /*
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-previous',
    },
    */
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    0: {
      // when window >=0px - webflow mobile portriat
      slidesPerView: 1,
      spaceBetween: -16,
    },
    478: {
      // when window >= 478px - webflow mobile landscape
      slidesPerView: 2,
      spaceBetween: -16,
    },
    767: {
      // when window >= 767px - webflow tablet
      slidesPerView: 3,
      spaceBetween: -16,
    },
    988: {
      // when window >= 988px - webflow desktop
      slidesPerView: 4,
      spaceBetween: -16,
    },
    1920: {
      // when window >= 988px - webflow desktop
      slidesPerView: 5,
      spaceBetween: -16,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
  speed: 1200,
});

// Swiper for coverflow effect slider with custom effect
const coverflowEffectSliderAutoPlay = new Swiper(
  ".is-coverflow-effect-auto-play",
  {
    ...commonOptions, // Spread common options here
    effect: "coverflow",
    centeredSlides: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    // loop: false,
    ...autoplayOptions, // Add autoplay options
    ...navigationBtn, // Add navigation buttons here as well
    // No autoplay here for this slider
  }
);

// thumb start

// Main Image Slider Initialize
const bigImgSlider = new Swiper(".swiper.is-thumb-slider-big-img", {
  spaceBetween: 10,
  slidesPerView: "auto",
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  loop: true,
  ...navigationBtn, // Add navigation buttons here as well
});

// Thumbnail Slider Initialize
const smThumbnailSlider = new Swiper(".swiper.is-bottom-sm-thumbnail", {
  spaceBetween: 10,
  slidesPerView: "auto",
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  loop: true,
});

// <!-- Simple control small image Initialize Swiper start -->

// Small Image (Thumbnail) Slider
const swiperBottomSmall = new Swiper(".is-bottom-sm-img", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: "auto", // à¦à¦•à¦¸à¦¾à¦¥à§‡ à¦¯à¦¤à¦—à§à¦²à§‹ à¦¸à§à¦²à¦¾à¦‡à¦¡ à¦«à¦¿à¦Ÿ à¦¹à¦¬à§‡
  grabCursor: true,
  keyboard: {
    delay: 1,
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    thresholDelta: 100,
  },
  preloadImages: true,
  centeredSlides: true, // active à¦¸à§à¦²à¦¾à¦‡à¦¡ à¦¸à¦¬à¦¸à¦®à§Ÿ à¦¸à§‡à¦¨à§à¦Ÿà¦¾à¦°à§‡ à¦¥à¦¾à¦•à¦¬à§‡
  slideToClickedSlide: true, // à¦•à§à¦²à¦¿à¦• à¦•à¦°à¦²à§‡ active à¦¸à§à¦²à¦¾à¦‡à¦¡ à¦¸à§‡à¦¨à§à¦Ÿà¦¾à¦°à§‡ à¦¯à¦¾à¦¬à§‡
  freeMode: true, // à¦®à¦¸à§ƒà¦£à¦­à¦¾à¦¬à§‡ à¦¸à§à¦•à§à¦°à¦² à¦•à¦°à¦¬à§‡
  freeModeMomentum: true, // à¦®à§‹à¦®à§‡à¦¨à§à¦Ÿà¦¾à¦®à§‡à¦° à¦®à¦¤à§‹ à¦®à¦¸à§ƒà¦£ à¦¸à§à¦•à§à¦°à¦²à¦¿à¦‚
  watchSlidesProgress: true, // à¦¸à§à¦²à¦¾à¦‡à¦¡à§‡à¦° à¦ªà§à¦°à§‹à¦—à§à¦°à§‡à¦¸ à¦Ÿà§à¦°à§à¦¯à¦¾à¦• à¦•à¦°à¦¬à§‡
  watchSlidesVisibility: true, // à¦¦à§ƒà¦¶à§à¦¯à¦®à¦¾à¦¨ à¦¸à§à¦²à¦¾à¦‡à¦¡à§‡à¦° à¦…à¦¬à¦¸à§à¦¥à¦¾ à¦Ÿà§à¦°à§à¦¯à¦¾à¦• à¦•à¦°à¦¬à§‡
  speed: 800, // à¦¸à§à¦²à¦¾à¦‡à¦¡à¦¿à¦‚ à¦®à¦¸à§ƒà¦£ à¦•à¦°à¦¾à¦° à¦œà¦¨à§à¦¯
  ...navigationBtn, // Navigation buttons à¦¯à§à¦•à§à¦¤ à¦•à¦°à¦¾
});

// Main Image Slider
const swiperTopBig = new Swiper(".is-top-big-img", {
  loop: true,
  zoom: true, // à¦œà§à¦® à¦•à¦°à¦¾à¦° à¦…à¦ªà¦¶à¦¨
  spaceBetween: 10, // à¦¸à§à¦²à¦¾à¦‡à¦¡à¦—à§à¦²à§‹à¦° à¦®à¦§à§à¦¯à§‡ à¦«à¦¾à¦à¦•à¦¾
  thumbs: {
    swiper: swiperBottomSmall, // Thumbnail slider à¦¯à§à¦•à§à¦¤ à¦•à¦°à¦²à§‹
  },
  speed: 600, // à¦®à¦¸à§ƒà¦£à¦¤à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¸à§à¦ªà¦¿à¦¡ à¦¦à§‡à§Ÿà¦¾ à¦¹à§Ÿà§‡à¦›à§‡
  ...navigationBtn, // Navigation buttons à¦¯à§à¦•à§à¦¤ à¦•à¦°à¦¾
});

// Marquee Autoplay options for infinite smooth scrolling with drag enabled

const marqueeAutoplayOptions2 = new Swiper(".is-marquee-2-slider", {
  spaceBetween: 0,
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  speed: 3000,
  freeMode: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0, // No delay for autoplay
  },
  touchStartPreventDefault: false,
});

// marquee2 functions start
function stopAutoplay() {
  const swiperTranslate = swiper.getTranslate();
  swiper.setTranslate(swiperTranslate);
  swiper.autoplay.stop();
}
function startAutoplay() {
  swiper.slideTo(swiper.activeIndex, 3000, false);
  swiper.autoplay.start();
}

// marqueeAutoplayOptions2.addEventListener("mouseenter", () => stopAutoplay());
// marqueeAutoplayOptions2.addEventListener("mouseleave", () => startAutoplay());
// marquee2 functions end

// Marquee Autoplay options for infinite smooth scrolling with drag enabled
const marqueeAutoplayOptions = {
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  speed: 3000,
  autoplay: {
    delay: 0, // No delay for autoplay
    disableOnInteraction: false, // Interaction won't stop autoplay
  },
  freeMode: true,
  grabCursor: true,
  loop: true,
  allowTouchMove: true,
  touchStartPreventDefault: false,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
};

// Function to initialize Swiper sliders
function initializeMarqueeSlider(sliderClass, addHoverEffect = false) {
  const sliderElement = document.querySelector(sliderClass);

  // Check if slider exists
  if (sliderElement) {
    const swiper = new Swiper(sliderClass, {
      ...marqueeAutoplayOptions, // Apply common autoplay options
    });

    const swiperWrapper = sliderElement.querySelector(".swiper-wrapper");
    if (swiperWrapper) {
      swiperWrapper.style.transitionTimingFunction = "linear"; // Smooth scrolling
    }

    // Optional hover pause effect
    if (addHoverEffect) {
      let isPaused = false;

      sliderElement.addEventListener("mouseenter", () => {
        if (!isPaused) {
          swiperWrapper.style.transitionDuration = "0ms"; // Stop immediately
          swiper.autoplay.stop();
          isPaused = true;
        }
      });

      sliderElement.addEventListener("mouseleave", () => {
        if (isPaused) {
          swiperWrapper.style.transitionDuration = ""; // Restore smooth scrolling
          swiper.autoplay.start();
          isPaused = false;
        }
      });
    }
  } else {
    // console.log(`${sliderClass} nf, sin.`); //not found, skipping initialization.
  }
}

// Initialize first slider (is-marquee-slider) without hover pause
initializeMarqueeSlider(".swiper.is-marquee-slider");

// Initialize second slider (is-marquee-slider-pause) with hover pause
initializeMarqueeSlider(".swiper.is-marquee-slider-pause", true);
