export default function loadContact() {
  const content = document.getElementById("content");
  content.textContent = "";

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Gourmet Lane, Foodie City, 45678";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";

  const email = document.createElement("p");
  email.textContent = "Email: contact@gourmethaven.com";

  content.append(heading, address, phone, email);
}
