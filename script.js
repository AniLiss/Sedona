/**
 * Created by Elizabeth on 22.09.2015.
 */


var link = document.querySelector(".searchHotelBtn");
var popup = document.querySelector(".formContent");

var form = popup.querySelector("form");
var arrivalDay = popup.querySelector("[name='arrivalDay']");
var formStatus =false;
var map = document.querySelector(".staticMap");
map.classList.add("staticMapHidden");


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
    if (!(login.value && password.value)) {
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

