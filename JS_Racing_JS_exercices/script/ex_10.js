window.addEventListener('load', function () {

    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            const input = document.getElementsByTagName('input')[0]; // Assuming you still want to access the first input
            console.log(input.value);
            const url = `https://apicarto.ign.fr/api/codes-postaux/communes/${input.value}`
            get(url)
        });
    }


 

    function get(url) {
        const fetchOptions = {
            method: "GET",
        };
        fetch(url, fetchOptions)
            .then(response => response.json())
            .then(dataJSON => {
                let info = dataJSON

                const footer = document.getElementsByTagName("footer")[0].children[0];
                for (let i = 0; i < info.length; i++) {
                    let communes = info[i].codeCommune
                    let libelle = info[i].libelleAcheminement
                    const element = document.createElement("div")
                    element.innerHTML = `Commune: ${communes} <br> Libellé Acheminement: ${libelle}`;
                    footer.appendChild(element);
                }
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });

    }
})