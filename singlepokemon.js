window.onload = () => {
    //Grab Character
    //URLSearchParams: get name from url
    let urlParams = new URLSearchParams(location.search);
    let characterName = urlParams.get("name");

    // if (!characterName) {
    //     console.error("huh?");
    //     location.href = "index.html";
    

    fetch(`https://animation-backend.onrender.com/characters/${characterName}`)
        .then((res) => res.json())
        .then((character) => {
            let singleCharacterPhotoEl = document.getElementById("imagesContainerSingle");
            let singleCharacterPhotoArr = character.imageUrl?.map((imageUrls) =>{
                return `<li><img src=${imageUrls.url} alt=${character.name} /></li>`;
            });
    })
    .catch((err) => {
        console.error("Error!", err)
    });
};