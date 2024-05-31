document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementsByTagName('footer')[0];
    const cookieDiv = footer.children[0];

    cookieDiv.children[0].addEventListener('click', function () {
        setCookie('acceptsCookies', 'true', 1);
        verification();
    });

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/;`;
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function verification() {
        const acceptsCookies = getCookie('acceptsCookies');
        cookieDiv.innerHTML = '';  // Clear existing content
        console.log(cookieDiv)
        if (acceptsCookies === 'true') {

            document.getElementsByTagName('footer')[0].children[0].innerHTML = "";
            const newDiv = document.createElement("div");
            const newButton = document.createElement("button");
            const buttonText = document.createTextNode("Delete cookie");
            newButton.appendChild(buttonText);
            newDiv.appendChild(newButton);
            document.getElementsByTagName('footer')[0].appendChild(newDiv);

            newButton.addEventListener('click', function () {
               const erase = document.getElementsByTagName('footer')[0].appendChild(newDiv)
                deleteCookie('acceptsCookies'), erase;
                verification();
            });

            cookieDiv.appendChild(newButton);
        }
        else {
            const newText = document.createTextNode("This website use cookies, click OK to accept it.");
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = "OK";
            link.addEventListener('click', function () {
                setCookie('acceptsCookies', 'true', 1);
                verification();
            });
            cookieDiv.appendChild(newText);
            cookieDiv.appendChild(link);
        }
    }

    function deleteCookie(name, erase) {
        erase.innerHTML=""
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
    }

    verification();
});
