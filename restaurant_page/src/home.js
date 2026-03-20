import heroImg from "./images/hero.jpg";

export default function loadHome() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.className = "hero";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant: ARNOLDS CUISINES";

  const tagline = document.createElement("p");
  tagline.textContent = "A Taste of Excellence, Every Day";

  const description = document.createElement("p");
  description.textContent =
    "Welcome to our restaurant where we always strive to make our customers smile through our meals.";

  content.append(heading, tagline, description);
}
