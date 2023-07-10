function openPopup(){

    const popup_back = document.getElementById("popup-back");
    const popup_menu = document.getElementById("popup-menu");

    popup_back.classList.add("active");
    popup_menu.classList.add("active");

}

function closePopup(){

    const popup_back = document.getElementById("popup-back");
    const popup_menu = document.getElementById("popup-menu");

    popup_back.classList.remove("active");
    popup_menu.classList.remove("active");

}