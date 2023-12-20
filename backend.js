window.onload = () => {
    // Get all Images
    fetch("https://animation-backend.onrender.com/characters")
      .then((res) => res.json())
      .then((characters) => {
        let imagesContainerEl = document.getElementById("imagesContainer");

        characters.forEach((character) => {
            console.log(character)
          let imageCard = document.createElement("div");
          imageCard.classList.add("card");

          imageCard.innerHTML = `Image of ${character.name}: <img src="${character.imageUrl}" alt="${character.name}"/> `;

          imagesContainerEl.appendChild(imageCard);
        });
      });
 
};
