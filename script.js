/**
 * Created by Elizabeth on 22.09.2015.
 */


var link = document.querySelector(".searchHotelBtn");
var popup = document.querySelector(".formContent");

var form = popup.querySelector("form");
var arrivalDay = popup.querySelector("[name='arrivalDay']");
var departureDay = popup.querySelector("[name='departureDay']");

link.addEventListener("click", function(event) {
    event.preventDefault();
//написать условие проверки
//    if  ? окно открыто закрыть :
//    if (classList="formContentShow"){
//        popup.classList.remove("formContentShow");
//    }
//    else{
    popup.classList.add("formContentShow");
    arrivalDay.focus();

});

/*закрытие по кнопке открытия*/
//close.addEventListener("click", function(event) {
//    event.preventDefault();
//    popup.classList.remove("formContentShow");
//    //popup.classList.remove("modal-error");
//});

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
            popup.classList.remove("modal-error");
        }
    }
});