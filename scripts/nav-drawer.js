export default function navDrawerHandler(navButton, navDrawer) {
  navButton.addEventListener("click", () => {
    if (navDrawer.style.display !== "block") {
        navDrawer.style.display = "block";
        navButton.innerHTML = "&cross;";
        //navDrawer.style.transition = "width 2s ease";
    } else {
        navDrawer.style.display = "none";
        navButton.innerHTML = "&equiv;";
    }
});
}
