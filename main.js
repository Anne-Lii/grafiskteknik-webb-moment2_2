"use strict"

// hämtar element från HTMLkoden
let openButtonEl = document.getElementById("menu_open");
let closeButtonEl = document.getElementById("menu_close");

//event
openButtonEl.addEventListener('click', menuToggle);
closeButtonEl.addEventListener('click', menuToggle);

//Toggla mellan navigeringsknapparna
function menuToggle() {

   let navMenuEl = document.getElementById("drop_menu");

   //kontrollera aktuell style display block eller none
   let style = window.getComputedStyle(navMenuEl);
   
   //ändrar aktuell style
   if (style.display === "none") {
       navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}