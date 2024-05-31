document.addEventListener('DOMContentLoaded', function () {
    const footerDiv = document.getElementsByTagName('footer')[0].children[0];

    // Créer un élément de saisie de type date pour la sélection de la date
    const datePicker = document.createElement('input');
    datePicker.type = 'date';

    // Créer un élément span pour afficher la date formatée
    const dateDisplay = document.createElement('span');
    dateDisplay.style.paddingLeft = '10px';

    // Ajouter à la fois le datePicker et le dateDisplay à la div du footer
    footerDiv.appendChild(datePicker);
    footerDiv.appendChild(dateDisplay);

    // Ajouter un écouteur d'événements au datePicker pour gérer l'événement de changement
    datePicker.addEventListener('change', function () {
        // Convertir la valeur de la date de l'input en un objet Date
        const selectedDate = new Date(this.value);

        // Définir les options pour le formatage de la date
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        // Formater la date en utilisant toLocaleDateString
        const formattedDate = selectedDate.toLocaleDateString(undefined, options);

        // Afficher la date formatée dans le span dateDisplay
        dateDisplay.textContent = formattedDate;
    });
});
