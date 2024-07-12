const menu = document.getElementById("menu");
const navmenu = document.getElementById("nav-menu");
function showMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    menu.style.top = "0px";
    navmenu.style.textAlign = "center";
  }
}

function closeMenu() {
  menu.style.display = "none";
}
