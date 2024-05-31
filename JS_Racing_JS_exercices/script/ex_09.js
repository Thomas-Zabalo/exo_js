window.addEventListener('load', function () {
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.style.border = '1px solid black';  // Ajout d'une bordure noire

    const ctx = canvas.getContext('2d');

    let rect = {
        x: 120,
        y: 50,
        width: 50,
        height: 50
    };

    let drag = false;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas
        ctx.fillStyle = 'blue';
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height); // Dessiner le rectangle
    }

    function mouseDown(e) {
        if (e.offsetX > rect.x && e.offsetX < rect.x + rect.width &&
            e.offsetY > rect.y && e.offsetY < rect.y + rect.height) {
            drag = true;
        }

    }

    function mouseUp() {
        drag = false;
    }

    function mouseMove(e) {
        if (drag) {
            rect.x = e.offsetX - rect.width / 2;
            rect.y = e.offsetY - rect.height / 2;
            draw();
            console.log(document.getElementsByTagName('footer')[0].children[1].innerHTML = `New coordinates => {x:${rect.x}, y:${rect.y}}`);
        }
    }

    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('mousemove', mouseMove);

    draw();

});
