setInterval(() => {
  // Générer des couleurs random
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  // mettre la couleur au format RGB
  const color = `rgb(${r}, ${g}, ${b})`;

  // Créer un élément h2 pour afficher la couleur
  const colorText = document.createElement("h2");
  colorText.textContent = color;

  // Effacer le contenu actuel du body
  document.body.innerHTML = "";

  // Ajouter au body
  document.body.appendChild(colorText);

  // Changer la couleur de fond de la page
  document.body.style.background = color;
}, 2000);

// événement pour copier la couleur au clic
document.body.addEventListener("click", function (event) {
  // Vérifier si l'élément cliqué est une balise h2
  if (event.target.tagName === "H2") {
    // récupérer le contenu
    const text = event.target.innerText;

    // Copier le texte dans le presse-papiers
    navigator.clipboard.writeText(text);
  }
});
