import menuTpl from './tamplates/menu.hbs';
import menuItems from './menu.json';

function createMenuListMarkup(menuItems) {
  return menuItems.map(item => menuTpl(item)).join('');
}

const menuListMarkup = createMenuListMarkup(menuItems);
export default menuListMarkup;
