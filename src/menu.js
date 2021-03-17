import menuTpl from "./tamplates/menu.hbs";
import menuItems from "../menu.json";

export default function createMenuListMarkup(menuItems) {
  return menuItems.map((item) => menuTpl(item)).join("");
}

export const menuListMarkup = createMenuListMarkup(menuItems);
