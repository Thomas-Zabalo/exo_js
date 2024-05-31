window.addEventListener("load", function () {

  const url = document.getElementsByTagName("section")[0].children[0].href;
  const dot = document.getElementsByClassName('dot')[0];

  // Appel de la fonction pour charger les prix du Bitcoin
  GetBitcoinPrix();

  // Fonction pour fetch le prix du Bitcoin
  function GetBitcoinPrix() {
    fetch(url)
      .then(response => response.json())
      .then(dataJSON => {
        // Extraction du prix en Euro
        const euroPrice = dataJSON.bpi.EUR.rate_float;
        // Mise à jour du prix et du visuel
        updateBitcoinPrix(euroPrice);
      })
      .catch(error => console.error('Erreur lors de la récupération du prix du Bitcoin:', error));
  }

  // Fonction pour mettre à jour le prix du Bitcoin et ajuster la couleur du point
  function updateBitcoinPrix(newPrice) {
    // Récupération du dernier prix stocké et convertit une chaine de charactères en un nombre a virgule
    const lastPrice = parseFloat(localStorage.getItem('btcPrice'));
    // Mise à jour du localStorage avec le nouveau prix
    localStorage.setItem('btcPrice', newPrice);

    // Comparaison du nouveau prix avec l'ancien et mise à jour de la couleur du point
    if (newPrice > lastPrice) {
      dot.style.backgroundColor = 'green';  // Le prix a augmenté
    } else if (newPrice < lastPrice) {
      dot.style.backgroundColor = 'red';    // Le prix a baissé
    } else {
      dot.style.backgroundColor = 'orange'; // Aucun changement de prix
    }
  }
});
