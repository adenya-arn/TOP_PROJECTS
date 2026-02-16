const container = document.querySelector("#container");

const div = document.createElement("div");

const button = document.querySelector("#btn1");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");

  div.addEventListener("mouseenter", (evnt) => {
    evnt.target.style.backgroundColor = "black";
  });

  container.appendChild(div);
}

button.addEventListener("click", (evnt) => {
  squares = prompt(
    "How many squares do you want for your square grid?(100 max) ",
  );

  if (squares > 100)
    return alert("Please use a number less than or equal to 100");
  console.log(squares);
});
