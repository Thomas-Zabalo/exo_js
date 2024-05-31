window.addEventListener('load', function () {
    document.getElementsByTagName("footer")[0].children[0].addEventListener("click", function () {
        recursive2("")
    })
})

function recursive2(promptedText) {
    promptedText = prompt("What is your name ?")

    // Début du code, analyser le paramètre
    
    // Si cliqué sur Annuler ou fermeture de la popup autrement, relancer la fonction
    if (promptedText === null || promptedText === "") {
        recursive2(promptedText)
        return;
    }
    //Vérification du nom de la personne avec la mise en place d'un Pop-Up "Oui" ou "Non"
    if (window.confirm("Are you sure " + promptedText + " is your name ?")) {
        //Affichage du nom de la personne
        document.getElementsByTagName("footer")[0].children[0].innerHTML = (`Hello ` + promptedText + ` !`);
        alert(`Hello ` + promptedText + ` !`);
        return;
    }
}