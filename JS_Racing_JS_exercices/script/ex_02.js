window.addEventListener('load', function () {
    //Définie une variable i à 0
    let i = 0;
    // Récupération de l'élement footer, puis son premeir enfant, ajout d'un écouteur dévènement Onclick
    document.getElementsByTagName("footer")[0].children[0].addEventListener("click", function () {
        //Lors du click ajout +1 à i
        i++;
        //Affichage de i
        document.getElementsByTagName("footer")[0].children[0].innerHTML = (i);
    })
})