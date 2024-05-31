window.addEventListener('load', function () {
    // Récupération de l'élement footer, puis son premeir enfant, enfin injection d'un texte "Hello World"
    document.getElementsByTagName("footer")[0].children[0].innerHTML = ("Hello World");
})