import './css/styles.css';
import menuListMarkup from './menu';

const SAVED_THEME_KEY = 'savedTheme';

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', menuListMarkup);

const bodyRef = document.querySelector('body');

const themeCheckbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onCheckboxInput = () => {
  const currentTheme = bodyRef.classList.contains(Theme.LIGHT)
    ? Theme.LIGHT
    : Theme.DARK;
  localStorage.setItem('savedTheme', currentTheme);
};

const savedTheme = localStorage.getItem(SAVED_THEME_KEY);
console.log(savedTheme);

const onCheckboxToggle = () => {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.className === Theme.LIGHT
    ? localStorage.setItem(SAVED_THEME_KEY, Theme.LIGHT)
    : localStorage.setItem(SAVED_THEME_KEY, Theme.DARK);
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.className === Theme.DARK
    ? localStorage.setItem(SAVED_THEME_KEY, Theme.DARK)
    : localStorage.setItem(SAVED_THEME_KEY, Theme.LIGHT);

  return localStorage.getItem(SAVED_THEME_KEY);
};

themeCheckbox.addEventListener('input', onCheckboxInput);
themeCheckbox.addEventListener('change', onCheckboxToggle);
