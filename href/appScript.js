function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        let offset = 100;
        let topPosition = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ 
            top: topPosition, 
            behavior: "smooth" 
        });
    } else {
        console.error(`Element with ID '${sectionId}' not found.`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".documentationSection");
    const navLinks = document.querySelectorAll(".type1options");

    function changeActiveNav() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((nav) => {
            nav.classList.remove("active");
            if (nav.getAttribute("onclick").includes(currentSection)) {
                nav.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveNav);
});

function darkModeOn(value){
    let body = document.querySelector("body");
    let header = document.querySelector("#headerLink");
    let mainSection = document.querySelector("#mainSection");
    let headerText = document.querySelectorAll(".headerText");
    let textPlace = document.querySelectorAll("#textPlace");
    
    if(value){
        body.style.backgroundColor = "#202124"
        document.querySelector("input").style.caretColor = "white";

        headerText.forEach((element) => {
            element.style.color = "#D4D4D4"; 
        }); 

        textPlace.forEach((element) => {
            element.style.backgroundColorColor = "#292929"; 
        }); 
        

        header.style.backgroundColor = "#17181B";
        mainSection.style.backgroundColor = "#212121";
        body.style.color = "white"; 

    }
    else{
        body.style.backgroundColor = "white"; 
        document.querySelector("input").style.caretColor = "black";
        headerText.forEach((element) => {
            element.style.color = "black"; 
        });
        headerText.forEach((element) => {
            element.style.color = "black"; 
        })

        header.style.backgroundColor = "white"; 
        mainSection.style.backgroundColor = "#F1F3F4"; 
        body.style.color = "#292929";  
    }


}
document.addEventListener("DOMContentLoaded", () => {
let darkMode = document.querySelector("#darkMode");
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
    } else {
        darkMode.style.backgroundColor = "rgb(113, 114, 136)"; 
        darkMode.style.justifyContent = "flex-start"; 
        darkmode = 0;
        
        darkModeOn(darkmode);
        profileIcon.style.filter = "invert(0%)"
        searchIcon.style.filter = "invert(0%)";
        searchIconIn.style.backgroundColor = "#F5F5F6";
        favIcon.style.filter = "invert(0%)"
        bagIcon.style.filter = "invert(0%)"
    }
});
});
