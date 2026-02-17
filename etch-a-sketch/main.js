const container = document.querySelector("#container");

const div = document.createElement("div");

const button = document.querySelector("#grid");

const reset = document.querySelector("#reset");

reset.addEventListener("click", (evnt) => {
  const squares = document.querySelectorAll(".grid");

  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
});

const getRandomValue = () => {
  return Math.floor(Math.random() * 256);
};

button.addEventListener("click", (evnt) => {
  const squares = prompt(
    "How many squares do you want for your square grid?(100 max) ",
  );

  if (squares > 100)
    return alert("Please use a number less than or equal to 100");

  container.innerHTML = "";
  const containerSize = container.clientWidth;
  const size = containerSize / squares;
  for (let i = 0; i < squares * squares; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    div.addEventListener("mouseenter", (evnt) => {
      const square = evnt.target;

      let darkness = Number(square.dataset.darkness);

      // if (darkness < 10) {
      //   darkness++;
      //   square.dataset.darkness = darkness;

      const opacity = darkness * 0.1;

      const r = getRandomValue();
      const g = getRandomValue();
      const b = getRandomValue();

      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      square.style.opacity = opacity;
      //}
    });

    container.appendChild(div);
  }
});
