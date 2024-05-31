window.addEventListener("load", function () {
   
    const form = document.getElementsByTagName('form')[0];
    const fileInput = document.getElementsByTagName('input')[0];
 
    const text = document.getElementsByClassName('content_display');
    
    // Ajout d'un écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (!fileInput.files.length) {
            alert('Veuillez sélectionner un fichier.');  // Demande à l'utilisateur de sélectionner un fichier s'il ne l'a pas fait
            return;
        }
    
        const file = fileInput.files[0];  // Obtient le premier fichier sélectionné par l'utilisateur
        const fileName = file.name;  // Extrait le nom du fichier
        const fileExtension = fileName.split('.').pop();  // Extrait l'extension du fichier
    
        // Crée une nouvelle promesse pour traiter le fichier
        new Promise((resolve, reject) => {
            if (file) {
                resolve(file);  // Si un fichier est sélectionné, résout la promesse avec ce fichier
            } else {
                reject('Aucun fichier sélectionné.');  // Sinon, rejette la promesse
            }
        })
        .then(file => checkFileType(file, fileExtension))  // Vérifie le type de fichier
        .then(content => displayContent(content))  // Affiche le contenu si le type de fichier est supporté
        .catch(error => console.error('Erreur :', error));  // Capture et affiche les erreurs qui peuvent survenir
    });
    
    // Fonction pour vérifier le type de fichier et lire son contenu s'il s'agit d'un fichier texte
    function checkFileType(file, extension) {
        return new Promise((resolve, reject) => {
            if (extension === 'txt') {
                const reader = new FileReader();  // Crée un objet FileReader pour lire le fichier
                reader.onload = function() {
                    resolve(reader.result);  // Résout la promesse avec le contenu du fichier lors de la lecture réussie
                };
                reader.onerror = function() {
                    reject('Erreur lors de la lecture du fichier.');  // Rejette la promesse en cas d'erreur de lecture
                };
                reader.readAsText(file);  // Lit le fichier comme du texte
            } else {
                resolve(`Le type de fichier est .${extension}, mais seuls les fichiers .txt sont pris en charge pour l'affichage.`);
            }
        });
    }
    
    // Fonction pour afficher le contenu du fichier ou un message dans la zone d'affichage
    function displayContent(content) {
        text.textContent = content;  // Affecte le contenu ou un message à l'élément pour l'affichage
    }
});
