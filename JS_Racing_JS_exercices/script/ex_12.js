window.addEventListener('load', function () {

      const img = document.getElementsByTagName("section")[0].children[1];

      const imgHref = img.href;
   
      window.localStorage.setItem("ex12_img", imgHref);

      if (localStorage.getItem("ex12_img") !== null) {
          const zoneImg = document.getElementsByTagName("footer")[0].children[0];
          zoneImg.innerHTML = '<img src="' + localStorage.getItem("ex12_img") + '" alt="Stored Image" width="200" heigh="100">';
      }
      else {
          document.getElementsByTagName("footer")[0].children[0].innerHTML = "";
      }
})