

// get button 
mybutton = document.getElementById("myBtn");

// when the user scrolls down to 20px from top the button appears 
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else { mybutton.style.display = "none";
        
    }
}








// when the user clicks on the button scroll to the top of the document
mybutton.addEventListener('click',scroll)


function scroll() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; // for chrome opara fire fox etc
}
