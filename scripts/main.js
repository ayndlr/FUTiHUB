import ThemeHandler from "./theme.js";
import navDrawerHandler from "./nav-drawer.js";
// Theme
const themeCont = document.querySelector(".theme-cont");

ThemeHandler(themeCont);

// Nav Drawer
const navDrawer = document.querySelector(".drawer");
const navButton = document.querySelector(".futi-menu");



navDrawerHandler(navButton, navDrawer);
