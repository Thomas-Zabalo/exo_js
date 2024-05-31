window.addEventListener('load', function () {

    const url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?limit=20"
    get(url)

    function get(url) {
        const fetchOptions = {
            method: "GET",
        };
        fetch(url, fetchOptions)
            .then(response => response.json())
            .then(dataJSON => {
                let info = dataJSON.results
                const footer = document.getElementsByTagName("footer")[0].children[0];
                for (let i = 0; i < info.length; i++) {
                    let communes = info[i].nom_commune
                    let etablissement = info[i].nom_etablissement
                    let mail = info[i].mail
                    const element = document.createElement("div")
                    element.innerHTML = `Commune: ${communes} <br> Etablissement: ${etablissement} <br> Email: ${mail}`;
                    footer.appendChild(element);
                }
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }



})