/**
 * Created by Elizabeth on 22.09.2015.
 */


var link = document.querySelector(".searchHotelBtn");
var popup = document.querySelector(".formContent");

var form = popup.querySelector("form");
var arrivalDay = popup.querySelector("[name='arrivalDay']");
var departureDay = popup.querySelector("[name='departureDay']");
var formStatus =false;
var map = document.querySelector(".staticMap");

var iframe = document.querySelector(".map");

map.classList.add("staticMapHidden");
iframe.classList.add("iframeShow");

link.addEventListener("click", function(event) {
    event.preventDefault();

    if(formStatus) {
        popup.classList.remove("formContentShow");
        formStatus = false;
    }
    else{
        popup.classList.add("formContentShow");
        arrivalDay.focus();
        formStatus = true;
    }
});

form.addEventListener("submit", function(event) {
    if (!(arrivalDay.value && departureDay.value)) {
        event.preventDefault();
    } else {
        localStorage.setItem("arrivalDay", arrivalDay.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("formContentShow")) {
            popup.classList.remove("formContentShow");
        }
    }
});

