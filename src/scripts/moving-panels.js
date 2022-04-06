const clickTitle = document.querySelector(".legend-title"); 
const legendContainer = document.querySelector(".legend-container");
const legendHeader = document.querySelector(".legend-header");
const legendExpand = document.querySelector(".legend-expand");
const mapContainer = document.querySelector(".map-container");

clickTitle.addEventListener("click", offPanel);
legendExpand.addEventListener("click", onPanel);

function offPanel(e) {
    legendContainer.classList.add("legend-container-hide");
    legendHeader.classList.add("legend-container-hide");
    setTimeout(function() {
        legendExpand.classList.add("legend-expand-visible");
    }, 500)
    mapContainer.style.left = "0";
} 

function onPanel(e) {
    legendContainer.classList.remove("legend-container-hide");
    legendHeader.classList.remove("legend-container-hide");
    legendExpand.classList.remove("legend-expand-visible");   
    mapContainer.style.left = "28%";
}

const settings = document.querySelector(".modal-settings-content");
const settingsExpand = document.querySelector(".settings-button");

settingsExpand.addEventListener("click", onSettings);
window.addEventListener("click", e =>  {
    const target = e.target;
    if(!target.closest('.modal-settings-content') && !target.closest('.settings-button')) {
        settings.classList.remove("settings-open");
    }
})

function onSettings(e) {
    settings.classList.toggle("settings-open");
}


const themeToggle = document.querySelector(".theme-toggle");
const scrollToggle = document.querySelector(".scroll-toggle");

themeToggle.addEventListener("click", function(e) {
    if(themeToggle.classList.contains("toggle-on")){
        themeToggle.classList.remove("toggle-on");
        themeToggle.innerHTML = "toggle_off";
    }else {
        themeToggle.classList.add("toggle-on");
        themeToggle.innerHTML = "toggle_on";
    }
})

scrollToggle.addEventListener("click", function(e) {
    if(scrollToggle.classList.contains("toggle-on")){
        scrollToggle.classList.remove("toggle-on");
        scrollToggle.innerHTML = "toggle_off";
        body.classList.remove("overflow-auto");
        body.classList.add("overflow-hidden");
    }else {
        scrollToggle.classList.add("toggle-on");
        scrollToggle.innerHTML = "toggle_on";
        body.classList.add("overflow-auto");
        body.classList.remove("overflow-hidden");
    }
})

