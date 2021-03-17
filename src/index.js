import "./css/styles.css";
import menuListMarkup from "./menu";

const menuList = document.querySelector(".js-menu");
menuList.appendChild(menuListMarkup);

const themeCheckbox = document.querySelector("#theme-switch-toggle");

themeCheckbox.addEventListener("change", onCheckboxToggle);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const onCheckboxToggle = () => {
  if (body.classList.has("Theme.LIGHT")) {
    body.classList.remove("Theme.LIGHT");
    body.classList.add("Theme.DARK");
  } else {
    body.classList.add("Theme.LIGHT");
  }
};
