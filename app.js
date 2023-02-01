const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = input.value;
  li.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
  list.appendChild(li);
  input.value = "";
});
