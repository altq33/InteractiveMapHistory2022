const clickTitle = document.querySelector(".legend-title"); 
const legendContainer = document.querySelector(".legend-container");
const legendHeader = document.querySelector(".legend-header");
const legendExpand = document.querySelector(".legend-expand");
const mapContainer = document.querySelector(".map-container");

clickTitle.addEventListener("click", offPanel);
legendExpand.addEventListener("click", onPanel);

function offPanel(e) {
    legendExpand.style.left  = "-10px";
    legendContainer.style.left = "-100%";
    legendHeader.style.left = "-100%";
    legendContainer.style.transition = "all 1s";
    legendHeader.style.transition = "all 1s";
    mapContainer.style.left = "0%";
} 

function onPanel(e) {
    legendExpand.style.left = "-100%";
    legendContainer.style.left = "0";
    legendHeader.style.left = "0";
    legendContainer.style.transition = "all 0.6s";
    legendHeader.style.transition = "all 0.6s";
    mapContainer.style.left = "30%";
}


