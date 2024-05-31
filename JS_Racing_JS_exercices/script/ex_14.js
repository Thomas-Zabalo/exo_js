window.addEventListener('load', function () {

    document.getElementsByTagName('footer')[0].children[0].addEventListener('click', function () {

        const url = document.getElementsByTagName("section")[0].children[0];

        // Requête GET 
        fetch(url.href)
            .then(response => response.json())  
            .then(data => {
                // Transforme les données JSON en une chaîne de caractères formatée pour l'affichage
                const dataString = JSON.stringify(data, null, 2);

                // Crée un objet Blob contenant les données JSON en format texte
                const blob = new Blob([dataString], { type: 'text/plain' });

                // Crée un URL temporaire pour le Blob
                const url = URL.createObjectURL(blob);

                // Crée un lien de téléchargement
                const downloadLink = document.createElement('a');
                downloadLink.href = url; // Définit l'URL du Blob comme href du lien
                downloadLink.download = "api_data.txt"; // Nomme le fichier téléchargé
                document.body.appendChild(downloadLink); // Ajoute le lien au document
                downloadLink.click(); // Simule un clic pour démarrer le téléchargement
                document.body.removeChild(downloadLink); // Enlève le lien du document
                URL.revokeObjectURL(url); // Libère l'URL temporaire créée
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });

})
