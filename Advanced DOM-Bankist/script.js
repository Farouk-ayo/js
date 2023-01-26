'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
const allSections = document.querySelectorAll(`.section`);
console.log(allSections);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`));

// creating and inserting elements
//WE USE  insertAdjacentHTML MOSTLY

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
// message.textContent = `we use cookies for improved functionality and analytics`;
message.innerHTML = `we use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>  `;

// prepend add the first child of an element
// header.prepend(message);
// append add the last child of an element
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete Element
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

// because we didnt call it in the inline styles 👆
console.log(message.style.height);
// but it works for this
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// attribute
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = `Beautiful minimalist logo`;

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute(`designer`));
logo.setAttribute(`company`, `Bankist`);

console.log(logo.src);
console.log(logo.getAttribute(`src`));

const link = document.querySelector(`.twitter-link`);
console.log(link.href);
console.log(link.getAttribute(`href`));

const linko = document.querySelector(`.nav__link--btn`);
console.log(linko.href);
console.log(linko.getAttribute(`href`));

// Data attribute
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add(`g`, `dd`);
logo.classList.remove(`g`, `f`);
logo.classList.toggle(`g`);
logo.classList.contains(`g`);

// dont use this
logo.className = `JONAS`;

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (X/Y)`, window.pageXOffset, pageYOffset);

  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behaviour: `smooth`,
  // });
  section1.scrollIntoView({ behavior: `smooth` });
});

// events
const h1 = document.querySelector(`h1`);

const alertH1 = function (e) {
  alert(`addEventListener: Great! You are reading the : D`);
  // h1.removeEventListener(`mouseenter`, alertH1);
};

h1.addEventListener(`mouseenter`, alertH1);

setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 300);

// random color
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomcolor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomcolor());
document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomcolor();
  console.log(`LINK`, e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop event propagation
  // from reaching the parent
  e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomcolor();
  console.log(`CONTAINER`, e.target, e.currentTarget);
});

document.querySelector(`.nav`).addEventListener(
  `click`,
  function (e) {
    this.style.backgroundColor = randomcolor();
    console.log(`NAV`, e.target, e.currentTarget);
  }
  // false or true
);

// page navigation
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (el) {
//     el.preventDefault();
//     console.log(`LINK`);
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// event delegation
// 1.add event listener to common parent element
// 2.determine what element originated the event

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  console.log(e.target);
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// DOM transversing
const hh1 = document.querySelector(`h1`);

// going downwards more :child
console.log(hh1.querySelectorAll(`.highlight`));
console.log(hh1.childNodes);
console.log(hh1.children);
hh1.firstElementChild.style.color = `white`;
hh1.lastElementChild.style.color = `orangered`;

// going upward
console.log(hh1.parentNode);
console.log(hh1.parentElement);

// closest finds parent
hh1.closest(`.header`).style.background = `var(--gradient-secondary)`;
hh1.closest(`h1`).style.background = `var(--gradient-primary)`;

// going sideways  siblings
console.log(hh1.previousElementSibling);
console.log(hh1.nextElementSibling);
console.log(hh1.previousSibling);
console.log(hh1.nextSibling);

console.log(hh1.parentElement.children);
[...hh1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = `scale(0.5 )`;
});

// tabbed components
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

// INSTEAD OF THIS , WE USE EVENT DELEGATION
// tabs.forEach(t => t.addEventListener(`click`, () => console.log(`TAB`)));

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  console.log(clicked);
  // Guard clause
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));

  // remove active class
  tabsContent.forEach(c => c.classList.remove(`operations__tab--active`));

  // Activate tab
  clicked.classList.add(`operations__tab--active`);

  // activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operation__content--active`);
});

// Event handler to the header nav,
// MENU fade Animation
const nav = document.querySelector(`.nav`);
const handleHover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing argument into handle function
nav.addEventListener(`mouseover`, handleHover.bind(0.5));
nav.addEventListener(`mouseout`, handleHover.bind(1));

// const nav = document.querySelector(`.nav`);
// nav.addEventListener(`mouseover`, function (e) {
//   if (e.target.classList.contains(`nav__link`)) {
//     const link = e.target;
//     const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//     const logo = link.closest(`.nav`).querySelector(`img`);

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener(`mouseout`, function (e) {
//   if (e.target.classList.contains(`nav__link`)) {
//     const link = e.target;
//     const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
//     const logo = link.closest(`.nav`).querySelector(`img`);

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener(`scroll`, function (e) {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add(`sticky`);
//   else nav.classList.remove(`sticky`);
// });

// sticky navigation intersection API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOption = {
//   root: null,
//   threshold: [0, 0.8],
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);

const headers = document.querySelector(`.header`);
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add(`sticky`);
  else nav.classList.remove(`sticky`);
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(headers);

// revealing the sections
const allSectionss = document.querySelectorAll(`.section`);
const revealSections = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove(`section--hidden`);
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});
allSectionss.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add(`section--hidden`);
});

// lazy loading images
const imgTarget = document.querySelectorAll(`img[data-src]`);
console.log(imgTarget);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener(`load`, function () {
    entry.target.classList.remove(`lazy-img`);
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px `,
});
imgTarget.forEach(img => imgObserver.observe(img));

// testimonial section
const sliders = function () {
  const slides = document.querySelectorAll(`.slide`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);

  let curSlide = 0;
  const maxSlide = slides.length;
  console.log(maxSlide);

  // const slider = document.querySelector(`.slider`);
  // slider.style.transform = `scale(0.4) translateX(-500px)`;
  // slider.style.overflow = `visible`;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // // 0%,100%,200%,300%

  // ALL FunctionS
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // using the dot
  const dotCotainer = document.querySelector(`.dots`);
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotCotainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(`.dots__dot`)
      .forEach(dot => dot.classList.remove(`dots__dot--active`));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // EVent handlers
  // using the button
  btnRight.addEventListener(`click`, nextSlide);
  // -100%,0%,100%,200%,300%
  btnLeft.addEventListener(`click`, prevSlide);

  // using the key
  document.addEventListener(`keydown`, function (e) {
    console.log(e);

    if (e.key === `ArrowLeft`) prevSlide();
    e.key === `ArrowRight` && nextSlide();
  });

  dotCotainer.addEventListener(`click`, function (e) {
    if (e.target.classList.contains(`dots__dot`)) {
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
      console.log(`DOT`);
    }
  });
};

sliders();

// ////////////////////////////////////
//////////////////////////////////////
///////////////////////////////////
//////////////////////////////////
document.addEventListener(`DOMContentLoaded`, function (e) {
  console.log(`HTML parsed and DOM tree built`, e);
});

window.addEventListener(`load`, function (e) {
  console.log(`Page fully loaded`, e);
});

// leaving the sites
// window.addEventListener(`beforeunload`, function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ``;
// });
