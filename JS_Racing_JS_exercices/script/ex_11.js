document.addEventListener('DOMContentLoaded', function () {

    document.getElementsByTagName('footer')[0].children[0].children[0].addEventListener('click', function () {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 86400;
        now.setTime(expireTime);

        // Définir le cookie avec expiration et chemin, et la valeur 'true' comme chaîne de caractères
        document.cookie = `acceptsCookies=true; expires=${now.toUTCString()}; path=/;`;
        verification()
    });

    function verification() {
        if (document.cookie) {
            document.getElementsByTagName('footer')[0].children[0].innerHTML = "";
            const newDiv = document.createElement("div");
            const newButton = document.createElement("button");
            const buttonText = document.createTextNode("Delete cookie");
            newButton.appendChild(buttonText);
            newDiv.appendChild(newButton);
            //insertion dans la nouvelle div dans le footer
            document.getElementsByTagName('footer')[0].appendChild(newDiv);
            remove()
        }
        else {
            const div = document.getElementsByTagName('footer')[0].children[0]

            const newText = document.createTextNode("This website use cookies, click OK to accept it.");


            const lien = document.createElement("a");
            lien.href = "#";
            const Validation = document.createTextNode("OK");

            lien.appendChild(Validation)
            div.appendChild(newText)
            div.appendChild(lien)


            // console.log(document.getElementsByTagName('footer')[0].children[0].appendChild(ensemble));
        }
    }

    function remove() {
        document.getElementsByTagName('footer')[0].children[1].children[0].addEventListener('click', function () {
            document.getElementsByTagName('footer')[0].children[1].innerHTML = ""
            deleteCookie()
        })
    }

    function deleteCookie() {
        document.cookie = 'acceptsCookies=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
        verification();
    }

});
