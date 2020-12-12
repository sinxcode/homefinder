var bars = document.getElementsByClassName("bar");
var menu = document.getElementsByClassName("hamburgur-menu");



function barClicked() {



    bars[0].classList.toggle("bar1-clicked");

    bars[1].classList.toggle("bar2-clicked");

    bars[2].classList.toggle("bar3-clicked");

    menu[0].classList.toggle("hamburgurMenu-clicked");



}
