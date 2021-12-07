let menulist = document.getElementById("menuList");

let margintop = document.querySelector("main")

let menuIcon = document.getElementById("menu-icon")

menuList.style.maxHeight = "0px";

function togglemenu() {
    if(menulist.style.maxHeight == "0px"){
        menuIcon.setAttribute("src", './public/images/close.png')
        menulist.style.maxHeight = "130px";
        margintop.style.marginTop = "220px";
        margintop.style.transition = "0.5s";
    } else {
        menuIcon.setAttribute("src", './public/images/open.png')
        menulist.style.maxHeight = "0px";
        margintop.style.marginTop = "0px";
        margintop.style.transition = "0.5s";
    }
}