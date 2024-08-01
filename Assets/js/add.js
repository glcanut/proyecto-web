document.getElementById("submit-button").addEventListener("click", saveData);
document.getElementById("cancel-button").addEventListener("click", clearForm);

let cards = JSON.parse(localStorage.getItem("add")) || [];

function saveData() {
  let name = document.getElementById("fName").value;
  let autor = document.getElementById("fAuthor").value;
  let category = document.getElementById("fCategory").value;
  let description = document.getElementById("fDescription").value;
  let image = "https://via.placeholder.com/200";

  if (name === "" || autor === "" || category === "" || description === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  let card = { name, autor, category, description, image };

  cards.push(card);

  localStorage.setItem("add", JSON.stringify(cards));

  clearForm();
}

function clearForm() {
  document.getElementById("fName").value = "";
  document.getElementById("fAuthor").value = "";
  document.getElementById("fCategory").value = "";
  document.getElementById("fDescription").value = "";
}
