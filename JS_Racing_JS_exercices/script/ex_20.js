document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByTagName('footer')[0].children[0];
    const fileInput = document.getElementsByTagName('input')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Récupérer le premier fichier depuis l'élément d'entrée de fichier
        const file = fileInput.files[0];
        if (!file) {
            alert('Veuillez sélectionner un fichier à télécharger.');
            return;
        }

        // Créer une URL pour le fichier
        const fileURL = URL.createObjectURL(file);

        const downloader = document.createElement('a');
        downloader.href = fileURL; // Définir l'attribut href sur l'URL de l'objet représentant le fichier
        downloader.download = file.name; // Définir l'attribut download sur le nom du fichier

        document.body.appendChild(downloader);

        downloader.click();

        URL.revokeObjectURL(fileURL);
        document.body.removeChild(downloader);
    });
});
