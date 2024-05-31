window.addEventListener('load', function () {
    const canvas = document.querySelector("footer canvas");
    const buttons = document.querySelectorAll("button");
    const audio = new Audio("/triangle.ogg"); 

    buttons.forEach(button => {
        if (button.textContent === 'Pause') {
            button.addEventListener('click', function () {
                canvas.style.backgroundColor = 'transparent';
                audio.pause()
            });
        } else if (button.textContent === 'Stop') {
            button.addEventListener('click', function () {
                audio.pause()
                audio.currentTime = 0;
                canvas.style.backgroundColor = 'black';
            });
        } else if (button.textContent === 'Mute') {
            button.addEventListener('click', function () {
                audio.muted = !audio.muted;
                canvas.style.backgroundColor = 'black';
            });
        }
    });


    function draw() {
        if (canvas.getContext) {
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(6, 6);    // Coordonnée du premier point en {6,6}
            ctx.lineTo(14, 10);  // Coordonnée du deuxieme point en {14,10}
            ctx.lineTo(6, 14);   // Coordonnée du troisème point en {6,14}
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
    }
    draw()
})