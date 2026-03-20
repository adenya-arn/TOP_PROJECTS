import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import heroImg from "./images/hero.jpg";

loadHome();

document.body.style.backgroundImage = `url(${heroImg})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

document.getElementById("home-btn").addEventListener("click", loadHome);
document.getElementById("menu-btn").addEventListener("click", loadMenu);
document.getElementById("contact-btn").addEventListener("click", loadContact);
