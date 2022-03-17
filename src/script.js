'use strict';

console.log('hello');

const featureTabsContainer = document.querySelector('.feature__tabs');
const accordionContainer = document.querySelectorAll('.accordion__box');
const form = document.querySelector('.form');
const btnMenu = document.querySelector('.btn--menu');

featureTabsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const links = this.querySelectorAll('.feature__link');
  links.forEach(child => child.classList.remove('active'));
  if (!e.target.closest('.feature__link')) return;
  e.target.classList.add('active');

  const activeTab = e.target.dataset.tab;

  const parentNode = this.closest('.feature__tab-box');
  console.log(parentNode);

  const img = parentNode.querySelector('img');
  const text = parentNode.querySelector('p');
  const h3 = parentNode.querySelector('h3');

  img.src = `./images/illustration-features-tab-${activeTab}.svg`;

  switch (activeTab) {
    case '1':
      console.log('tab 1');
      h3.textContent = 'Bookmark in one click';
      text.textContent =
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
      break;
    case '2':
      console.log('tab 2');
      h3.textContent = 'Intelligent search';
      text.textContent =
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
      break;
    case '3':
      console.log('tab 3');
      h3.textContent = 'Share your bookmarks';
      text.textContent =
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
      break;
    default:
      return;
  }
});
accordionContainer.forEach(accordion =>
  accordion.addEventListener('click', function () {
    const accordionAnswer = accordion.querySelector('.accordion__answer');
    if (!accordion.classList.contains('active')) {
      accordion.classList.add('active');
      accordionAnswer.classList.remove('hide');
      console.log('removed');
    } else {
      accordion.classList.remove('active');
      accordionAnswer.classList.add('hide');
      console.log('added');
    }
  })
);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formInputEl = this.querySelector('.form__input');
  const email = formInputEl.value;
  const regex = new RegExp(`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`);

  if (!email.match(regex)) this.classList.add('invalid');
  else this.classList.remove('invalid');

  setTimeout(() => {
    this.classList.remove('invalid');
  }, 5000);
});

btnMenu.addEventListener('click', function (e) {
  e.preventDefault();
  const navList = document.querySelector('.nav__list');

  navList.classList.toggle('active');
  if (navList.classList.contains('active')) {
    this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>
    `;
  } else {
    this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>
    `;
  }
});
