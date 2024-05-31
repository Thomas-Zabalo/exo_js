window.addEventListener('load', function () {
  const canvases = document.querySelectorAll("footer div canvas");

  // Associer chaque canvas à sa couleur de fond et les stocker dans un tableau
  const canvasArray = Array.from(canvases).map(canvas => ({
    canvas: canvas,
    color: window.getComputedStyle(canvas).backgroundColor
  }));

  // Définir un ordre de tri basé sur des valeurs prédéfinies
  const colorOrder = {
    "rgb(255, 165, 0)": 1,  // Orange
    "rgb(128, 0, 128)": 2,  // Violet
    "rgb(0, 0, 0)": 3,      // Noir
    "rgb(128, 128, 0)": 4   // Vert
  };

  // Trier les canvas par couleur en utilisant l'ordre défini dans `colorOrder`
  canvasArray.sort((a, b) => colorOrder[a.color] - colorOrder[b.color]);

  // Sélectionner le parent pour repositionner les canvas
  const parentDiv = document.querySelector("footer div");
  parentDiv.innerHTML = ''; // Effacer le contenu actuel

  // Ajouter les canvas triés au parent, en réappliquant les couleurs de fond
  canvasArray.forEach(background => {
    background.canvas.style.backgroundColor = background.color; 
    parentDiv.appendChild(background.canvas);
  });

});
