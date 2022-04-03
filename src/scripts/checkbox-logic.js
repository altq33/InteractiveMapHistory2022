const castleCheckbox = document.querySelector("#castles-checkbox");
const factoryCheckbox = document.querySelector("#factories-checkbox");
const siegeCheckbox = document.querySelector("#siege-checkbox");
const battleCheckbox = document.querySelector("#battles-checkbox");
const allCheckboxes = document.querySelectorAll(".event-checkbox")

const castleIcons = document.querySelectorAll(".map-castle-icon");
const factoryIcons = document.querySelectorAll(".map-factory-icon");
const siegeIcons = document.querySelectorAll(".map-siege-icon");
const swordsIcons = document.querySelectorAll(".map-swords-icon");


for(item of allCheckboxes) {
    item.addEventListener("click", function() {
        if(castleCheckbox.checked) {
            for(item of castleIcons) {
                item.style.display = "block";
            }
        }else {
            for(item of castleIcons) {
                item.style.display = "none";
            }
        }    
        if(factoryCheckbox.checked) {
            for(item of factoryIcons) {
                item.style.display = "block";
            }
        }else {
            for(item of factoryIcons) {
                item.style.display = "none";
            }
        }   
        if(siegeCheckbox.checked) {
            for(item of siegeIcons) {
                item.style.display = "block";
            }
        }else {
            for(item of siegeIcons) {
                item.style.display = "none";
            }
        }   
        if(battleCheckbox.checked) {
            for(item of swordsIcons) {
                item.style.display = "block";
            }
        }else {
            for(item of swordsIcons) {
                item.style.display = "none";
            }
        }       
    })
}