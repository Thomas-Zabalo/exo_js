window.addEventListener('load', function () {
    let character = '';
    //Ajout d'un écouteur d'évènement sur l'appuie d'une touche 
    document.addEventListener('keypress', function (event) {
        // Valeur des touches touchées
        character += event.key;
        //Vérification de la longeur des charactères
        if (character.length > 42) {
            // si alors c'est supérieure alors on supprime le premier charactère pour que cela fasse toujours 42
            character = character.substring(character.length - 42);
        }
        //Affichage des charactères tapés dans la page
        document.getElementsByTagName("footer")[0].children[0].innerHTML = (character);

    });
});

