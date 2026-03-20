import pizzaImg from "./images/pizza.jpg";
import salmonImg from "./images/salmon.jpg";
import tiramisuImg from "./images/tiramisu.jpg";
import chocolateCakeImg from "./images/chocolateCake.jpg";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  content.appendChild(heading);

  // Menu items
  const menuItems = [
    {
      name: "Margherita Pizza",
      desc: "Classic Italian pizza — $14",
      img: pizzaImg,
      credit:
        "Photo by ROMAN ODINTSOV: https://www.pexels.com/photo/mouthwatering-pizza-in-close-up-shot-5903178/",
    },
    {
      name: "Grilled Salmon",
      desc: "Served with roasted vegetables — $22",
      img: salmonImg,
      credit:
        "Photo by Rachel Claire: https://www.pexels.com/photo/cooked-food-on-black-ceramic-plate-5531039/",
    },
    {
      name: "Tiramisu",
      desc: "Classic Italian dessert — $8",
      img: tiramisuImg,
      credit:
        "Photo by Manu Madu: https://www.pexels.com/photo/a-piece-of-cake-on-saucer-6403383/",
    },
    {
      name: "Chocolate Lava Cake",
      desc: "Served warm with vanilla ice cream — $9",
      img: chocolateCakeImg,
      credit:
        " Photo by Valeria Boltneva: https://www.pexels.com/photo/delicious-molten-chocolate-lava-cake-on-plate-36183209/",
    },
  ];

  // Cards
  const cardsContainer = document.createElement("div");
  cardsContainer.style.display = "flex";
  cardsContainer.style.flexWrap = "wrap";
  cardsContainer.style.justifyContent = "center";

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    if (item.img) {
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      card.appendChild(img);
    }

    const name = document.createElement("h3");
    name.textContent = item.name;
    card.appendChild(name);

    const desc = document.createElement("p");
    desc.textContent = item.desc;
    card.appendChild(desc);

    if (item.credit) {
      const credit = document.createElement("p");
      credit.innerHTML = `<small>${item.credit}</small>`;
      card.appendChild(credit);
    }

    cardsContainer.appendChild(card);
  });

  content.appendChild(cardsContainer);
}
