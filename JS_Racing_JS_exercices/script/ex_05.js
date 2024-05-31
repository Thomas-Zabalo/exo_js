window.addEventListener('load', function () {
    // changement taille style du texte
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        if (button.textContent === '+') {
            button.addEventListener('click', function () {
                changeFontSize(1.2);  // Augmenter la taille de la police
            });
        } else if (button.textContent === '-') {
            button.addEventListener('click', function () {
                changeFontSize(0.8);  // Diminuer la taille de la police
            });
        }
    });

    function changeFontSize(taille) {
        for (let ii = 0; ii < document.getElementsByTagName("section")[0].children.length; ii++) {

            const element = document.getElementsByTagName("section")[0].children[ii]

            const style = window.getComputedStyle(element).fontSize

            const x = parseFloat(style) * taille

            element.style.fontSize = `${x}px`;
        }
    }



    //Changement de background lors du changement du select
    document.getElementsByTagName("select")[0].addEventListener('change', (e) => {
        const result = e.target.value;
        const background = document.querySelector("footer")
        background.style.backgroundColor = result
    })

})