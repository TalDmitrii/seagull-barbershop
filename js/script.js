var link = document.querySelector(".j-login-link");
var popup = document.querySelector(".j-modal-login");
var btnClose = popup.querySelector(".j-modal-close");
var btnOpenMap = document.querySelector(".j-button-map");
var popupMap = document.querySelector(".j-modal-map");
var btnCloseMap = popupMap.querySelector(".j-modal-close");
// var form = popup.querySelector(".form");
// var login = popup.querySelector(".[name=login]");
// var password = popup.querySelector(".[name=password]");

// var isStorageSupport = true;
// var storage = "";

// try {
//     storage = localStorage.getItem("login");
// } catch (err) {
//     isStorageSupport = false;
// }

// link.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popup.classList.add("modal-show");

//     if (storage) {
//         login.value = storage;
//         password.focus();
//     } else {

link.addEventListener("click", function(evt){
    evt.preventDefault();
    console.dir(popup);
    popup.style.display = "block";
});


btnClose.addEventListener("click", function(){
    popup.style.display = "none";
});

btnOpenMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});


btnCloseMap.addEventListener("click", function(){
    popupMap.classList.remove("modal-show");
});