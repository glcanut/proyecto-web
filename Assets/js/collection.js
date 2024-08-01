let cards = JSON.parse(localStorage.getItem("add")) || [];

const rendercards = (arrayCards) => {
  let containerCards = document.getElementById("cardContainer");
  containerCards.innerHTML = "";

  arrayCards.forEach((card) => {
    let dataCard = document.createElement("div");
    dataCard.className = "card";
    dataCard.innerHTML = `<img src=${card.image} />
            <h3>${card.autor}</h3>
            <p>${card.category}</p>
            <p>${card.description}</p>
        `;
    containerCards.appendChild(dataCard);
  });
};

rendercards(cards);
