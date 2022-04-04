const modalLinks = document.querySelectorAll(".modal-link"); 
const lockPadding = document.querySelector(".lock-padding");

let unlock = true; 

const timeout = 500; 

if(modalLinks.length > 0) { 
    for(let i = 0; i < modalLinks.length; i++) {
        const item = modalLinks[i]; 
        item.addEventListener("click", function(e) { 
            const modalName = item.getAttribute('href').replace("#", "");
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal); 
            e.preventDefault();
        })
    }
}

const modalCloseIcon = document.querySelectorAll(".close-modal");
if (modalCloseIcon.length > 0) {
    for(let i = 0; i < modalCloseIcon.length; i++) {
        const elem = modalCloseIcon[i];
        elem.addEventListener("click", function(e) {
            modalClose(elem.closest('.modal'));
            e.preventDefault();
        })
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector(".modal.open");
        if(modalActive) {
            modalClose(modalActive, false);
        }else  {
            // bodyLock();
        }
        currentModal.classList.add("open");
        currentModal.addEventListener("click", function(e) {
            if(!e.target.closest(".modal-content")){
                modalClose(e.target.closest('.modal'))
            }        
        });
    }
}

function modalClose(modalActive, doUnlock = true) {
    if(unlock) {
        modalActive.classList.remove("open");
        // if(doUnlock) {
        //     bodyUnLock();
        // }
    }
}

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + 'px';
    
//     for (item of lockPadding) {
//         item.style.paddingRight = lockPaddingValue; 
//     } 
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add("lock");   // попробовать remove dragscroll 
//     unlock = false; 
//     setTimeout(function() {
//         unlock = true; 
//     }, timeout);
// }

// function bodyUnLock() {
//     setTimeout(function() {
//         for(item of lockPadding) {
//             item.style.paddingRight = 0; 
//         }
//         body.style.paddingRight = 0; 
//         body.classList.remove("lock");
//     }, timeout);

//     unlock = false; 
//     setTimeout(function() {
//         unlock = true; 
//     }, timeout);
// }