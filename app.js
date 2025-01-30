function darkModeOn(value){
        let body = document.querySelector("body");
        let header = document.querySelector("#header");
        let headerText = document.querySelectorAll(".headerText");
        let textPlace = document.querySelectorAll("#textPlace");
        
        if(value){
            body.style.backgroundColor = "#1A1A1A"
            document.querySelector("input").style.caretColor = "white";
            headerText.forEach((element) => {
                element.style.color = "#D4D4D4"; 
            }); 
            textPlace.forEach((element) => {
                element.style.backgroundColorColor = "#292929"; 
            }); 
            header.style.backgroundColor = "rgb(21, 21, 21)";
            body.style.color = "white"; 

        }
        else{
            body.style.backgroundColor = "white"; 
            document.querySelector("input").style.caretColor = "black";
            headerText.forEach((element) => {
                element.style.color = "black"; 
            });
            header.style.backgroundColor = "white"; 
            body.style.color = "#292929";  
        }


}
document.addEventListener("DOMContentLoaded", () => {
    let darkMode = document.querySelector("#darkMode");
    let darkModeStatus = document.querySelector("#darkModeStatus");
    let darkmode = 0; 
    let profileIcon = document.querySelector("#profileIcon");
    let favIcon = document.querySelector("#favIcon");
    let bagIcon = document.querySelector("#bagIcon");
    let searchIcon = document.getElementById("searchIcon");
    let searchIconIn = document.getElementById("searchBarIn");
    darkMode.addEventListener("click", () => {
        if (darkmode == 0) {
            darkMode.style.backgroundColor = "#ff3f6c"; 
            darkMode.style.justifyContent = "flex-end";            
            darkmode = 1;
            profileIcon.style.filter = "invert(90%)"
            searchIcon.style.filter = "invert(90%)";
            searchIconIn.style.backgroundColor = "#212121";
            favIcon.style.filter = "invert(92%)"
            bagIcon.style.filter = "invert(92%)"
            darkModeOn(darkmode);
            closingOffer();
        } else {
            darkMode.style.backgroundColor = "rgb(113, 114, 136)"; 
            darkMode.style.justifyContent = "flex-start"; 
            darkmode = 0;
            
            darkModeOn(darkmode);
            closingOffer();
            profileIcon.style.filter = "invert(0%)"
            searchIcon.style.filter = "invert(0%)";
            searchIconIn.style.backgroundColor = "#F5F5F6";
            favIcon.style.filter = "invert(0%)"
            bagIcon.style.filter = "invert(0%)"
        }
    });
});
let stopConfetti =  true; 
function givingOffer() {
    let offerReward = document.querySelector("#offerReward");
    offerReward.classList.remove("offerRewardWork");
    stopConfetti = false; 
    
}

function closingOffer() {
    let offerReward = document.querySelector("#offerReward");
    offerReward.classList.add("offerRewardWork");
    stopConfetti = true;

}

document.addEventListener("DOMContentLoaded", () => {
    let offer = document.querySelector(".offer");

    offer.addEventListener("click", () => {
        givingOffer();
        work1();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let closeOffer = document.querySelector("#close-offer"); 

    closeOffer.addEventListener("click", () => {
        closingOffer();
    });
});

function work1() {
    let end = Date.now() + 5000; 
    let colors = ['#bb0000', '#ffffff'];

    (function frame() {
        if (stopConfetti) return;

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

