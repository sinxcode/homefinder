var bars = document.getElementsByClassName("bar");
var menu = document.getElementsByClassName("hamburgur-menu");

var dropDown = document.getElementById("dropdown");

var hamburgurContainer = document.getElementsByClassName("hamburgur-container");



function barClicked() {



    bars[0].classList.toggle("bar1-clicked");

    bars[1].classList.toggle("bar2-clicked");

    bars[2].classList.toggle("bar3-clicked");

    menu[0].classList.toggle("hamburgurMenu-clicked");



    if (dropDown.style.display == "block") {

        dropDown.style.display = "none";
        dropDown.style.height = "0";
        document.getElementsByTagName("body")[0].style.overflow = "visible";
        hamburgurContainer[0].classList.toggle("hamburgur-container-clicked");
    } else {

        dropDown.style.display = "block";

        dropDown.style.height = "100vh";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        hamburgurContainer[0].classList.toggle("hamburgur-container-clicked");

    }




}
