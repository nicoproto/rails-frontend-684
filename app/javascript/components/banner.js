import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your code", "Learn to life"],
    typeSpeed: 500,
    loop: true
  });
}

export { loadDynamicBannerText };