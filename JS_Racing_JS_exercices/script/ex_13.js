window.addEventListener('load', function () {

    const zoneImg =  document.getElementsByTagName("footer")[0].children[0];
    const storedImage = localStorage.getItem("ex12_img");

    if (storedImage) {
        zoneImg.innerHTML = '<img src="' + storedImage + '" alt="Stored Image" style="width:100%;">';
        const img = zoneImg.querySelector('img');

        let intervalId;
        img.addEventListener('mouseenter', function () {
            intervalId = setInterval(function () {
                let currentWidth = img.style.width;
                let currentPercentage = parseInt(currentWidth);
                if (currentPercentage > 5) {
                    img.style.width = (currentPercentage - 5) + '%';
                }
            }, 1000);
        });

        img.addEventListener('mouseleave', function () {
            clearInterval(intervalId);
            img.style.width = '100%'; 
        });

        img.addEventListener('click', function () {
            localStorage.removeItem("ex12_img");
            zoneImg.innerHTML = ''; 
        });
    }
})