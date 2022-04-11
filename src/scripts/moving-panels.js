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
    if(!target.closest('.modal-settings-content') && !target.closest('.settings-button') && !target.closest(".modal-close")) {
        settings.classList.remove("settings-open");
    }
})

function onSettings(e) {
    settings.classList.toggle("settings-open");
}


const themeToggle = document.querySelector(".theme-toggle");
const scrollToggle = document.querySelector(".scroll-toggle");
const html = document.querySelector("html");

themeToggle.addEventListener("click", function(e) {
    if(themeToggle.classList.contains("toggle-on")){
        themeToggle.classList.remove("toggle-on");
        themeToggle.innerHTML = "toggle_off";
        html.classList.remove("light");
        html.classList.add("dark");
    }else {
        themeToggle.classList.add("toggle-on");
        themeToggle.innerHTML = "toggle_on";
        html.classList.remove("dark");
        html.classList.add("light");
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


castle_ul.onclick = function (event){
    tree1.classList.toggle("sub-ul-hidden");
}

factory_ul.onclick = function (event){
    tree2.classList.toggle("sub-ul-hidden");
}

siege_ul.onclick = function (event){
    tree3.classList.toggle("sub-ul-hidden");
}

battles_ul.onclick = function (event){
    tree4.classList.toggle("sub-ul-hidden");
}


const icons = document.querySelectorAll(".icon"); 
console.log(typeof icons);
const eventItems = document.querySelectorAll(".event-item"); 

for(eventItem of  eventItems) {
    eventItem.addEventListener("click", scrollToIcon); 
}

function scrollToIcon() {
    currentId = this.id[this.id.length - 1];
    const currentIcon = document.querySelector("#icon-map" + currentId);
    currentIcon.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
    currentIcon.style.transform = "translate(-10px) scale(1.8)";
    window.addEventListener("click", e => {
        const target = e.target;
    if(target != currentIcon && target != this) {
        currentIcon.style.transform = "";
    }
    });
}

const allEventsItems = [].concat(...icons, ...eventItems);
const allEventModals = document.querySelectorAll(".event-modal");
let reopen = false; 
for(item of allEventsItems) {
    item.addEventListener("click", modalLogic);
}

function modalLogic() {
    let currentId = this.id[this.id.length - 1];
    const currentModal = document.querySelector("#event-modal" + currentId);
    for(item of allEventModals) {
        if(item.classList.contains("open") && item != currentModal) {
            item.classList.remove("open");
            reopen = true; 
        }
    }
    if(reopen) {
        setTimeout(() => currentModal.classList.add("open"), 600);  
    }else {
        currentModal.classList.add("open");
    }
    window.addEventListener("click", e => {
        const target = e.target;
    if(target.classList.contains("event-modal-close")) {
        for(item of allEventModals) {
            if(item.classList.contains("open")) {
                item.classList.remove("open");
                reopen = false; 
            }
        }
    }
    });
}