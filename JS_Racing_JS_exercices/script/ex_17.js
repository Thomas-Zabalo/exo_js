window.addEventListener("load", function () {

    function createCanvas() {
        const canvas = document.createElement('canvas');
        const footer = document.querySelector('footer > div');
        canvas.width = 500;
        canvas.height = 500;
        footer.appendChild(canvas);
        return canvas;
    }

    // Tableau contenant les URLs des images à charger.
    const urls = [
        'https://www.lifewire.com/thmb/lWlCQDkZkvbWxKhkJZ6yjOJ_J4k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg',
        'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg',
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    ];
    combineImages(urls); // Appel de la fonction pour combiner les images

    // Fonction asynchrone pour charger et dessiner les images sur les canvas créés.
    async function combineImages(urls) {
        for (const url of urls) { // Boucle à travers chaque URL
            const canvas = createCanvas(); // Crée un nouveau canvas pour chaque image
            const ctx = canvas.getContext('2d');
            try {
                const img = await loadImage(url); // Charge l'image de manière asynchrone
                const x = getRandomPosition(canvas.width, img.width); // Calcule une position x aléatoire
                const y = getRandomPosition(canvas.height, img.height); // Calcule une position y aléatoire
                ctx.drawImage(img, x, y); // Dessine l'image sur le canvas aux positions x et y
            } catch (error) {
                console.error('Error loading image:', error); // Affiche les erreurs de chargement
            }
        }
    }

    // Fonction pour charger une image à partir d'une URL et retourner une promesse qui se résout avec l'image.
    function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image(); // Crée un nouvel objet image
            setTimeout(() => {
                img.onload = () => resolve(img); // Résout la promesse une fois l'image chargée
                img.onerror = () => reject(new Error(`Failed to load image at ${url}`)); // Rejette la promesse si une erreur survient
                img.src = url; // Définit l'URL de l'image
            }, 2000); // Retard introduit pour simuler un chargement lent
        });
    }

    // Fonction pour obtenir une position aléatoire sur le canvas en s'assurant que l'image est entièrement visible.
    function getRandomPosition(canvasSize, imageSize) {
        return Math.floor(Math.random() * (canvasSize - imageSize)); // Calcule une position qui garde l'image entièrement visible
    }
});