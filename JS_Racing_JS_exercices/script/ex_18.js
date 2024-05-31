document.addEventListener('DOMContentLoaded', function() { // Correction: Utiliser 'DOMContentLoaded' au lieu de 'load'
    const dropZones = Array.from(document.querySelectorAll('.drag_drop'));

    // Fonction pour prévenir les comportements par défaut du navigateur pour les événements drag & drop
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Fonction pour ajouter une classe de mise en évidence
    function highlight(e) {
        e.currentTarget.classList.add('highlight');
    }

    // Fonction pour retirer la classe de mise en évidence
    function unhighlight(e) {
        e.currentTarget.classList.remove('highlight');
    }

    // Fonction pour gérer les fichiers déposés
    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;

        if (files.length) {
            handleFiles(files);
        }
    }

    // Fonction pour gérer le traitement des fichiers
    function handleFiles(files) {
        ([...files]).forEach(uploadFile);
    }

    // Fonction pour lire et afficher l'image déposée
    function uploadFile(file) {
        let reader = new FileReader();
        reader.onloadend = function() {
            let img = document.createElement('img');
            img.src = reader.result;

            // Définir une taille maximale pour l'image
            img.style.maxWidth = '500px';
            img.style.maxHeight = '500px';

            // Effacer les contenus précédents de la zone de dépôt et ajouter l'image
            dropZones.forEach(dropZone => {
                dropZone.innerHTML = '';
                dropZone.appendChild(img);
            });
        }
        reader.readAsDataURL(file);
    }    

    // Associer les événements nécessaires à chaque zone de dépôt
    dropZones.forEach(dropZone => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, unhighlight, false);
        });

        dropZone.addEventListener('drop', handleDrop, false);
    });
});
