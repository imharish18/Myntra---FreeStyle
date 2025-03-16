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

// WORKING OF TO WEAR
const taskInput = document.getElementById("toDoInput");
const submitButton = document.getElementById("toDoInputSubmit");
const taskList = document.querySelector("#listOfToWear ul");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");


        const taskNameDiv = document.createElement("div");
        taskNameDiv.id = "taskName";
        taskNameDiv.textContent = taskText;


        const buttonsDiv = document.createElement("div");
        buttonsDiv.id = "remDone";

        const removeButton = document.createElement("button");
        removeButton.id = "removeButton";
        removeButton.textContent = "❌";


        const doneButton = document.createElement("button");
        doneButton.id = "addButton";
        doneButton.textContent = "✔";


        buttonsDiv.appendChild(removeButton);
        buttonsDiv.appendChild(doneButton);

        taskDiv.appendChild(taskNameDiv);
        taskDiv.appendChild(buttonsDiv);

        taskList.appendChild(taskDiv);

        taskInput.value = "";
    }
}

submitButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


taskList.addEventListener("click", function(event) {
    if (event.target.id === "removeButton") {

        event.target.closest(".task").remove();
    }
});


taskList.addEventListener("click", function(event) {
    if (event.target.id === "addButton") {
        const taskDiv = event.target.closest(".task");
        taskDiv.querySelector("#taskName").style.textDecoration = "line-through";
        event.target.textContent = "Done";
        event.target.disabled = true;
    }
});
// Quoting Text
// List of quotes
const quotes = [
    "Style is a way to say who you are. 😎👗",
    "Confidence is the best outfit, wear it daily. 💃✨",
    "Dress to impress, but always be yourself. 👚💖",
    "Fashion is freedom to express yourself. 🎨👠",
    "Life’s too short to wear boring clothes. 🌟👗",
    "Clothes aren’t going to change the world, but you will. 💪👗",
    "Fashion is art, and you are the canvas. 🎨🖤",
    "Elegance is when the inside is as beautiful as the outside. 🌹👗",
    "Your style speaks louder than words. 👠💬",
    "Wear confidence like it’s your favorite outfit. ✨👚"
];


let currentQuoteIndex = 0;
let currentCharIndex = 0;
let isTyping = true;
let textContainer = document.getElementById("tableQuote");

function typeAndBackspace() {
    if (isTyping) {
        textContainer.innerHTML += quotes[currentQuoteIndex].charAt(currentCharIndex);
        currentCharIndex++;

        if (currentCharIndex === quotes[currentQuoteIndex].length) {
            isTyping = false;
            setTimeout(typeAndBackspace, 1000); 
        } else {
            setTimeout(typeAndBackspace, 50);
        }
    } else {

        textContainer.innerHTML = textContainer.innerHTML.slice(0, -1);
        currentCharIndex--;

       
        if (currentCharIndex === 0) {
            isTyping = true;
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; 
            setTimeout(typeAndBackspace, 25); 
        } else {
            setTimeout(typeAndBackspace, 100); 
        }
    }
}

typeAndBackspace();

//StopWatch
let totalSeconds = 24 * 3600; // 24-hour countdown
let timerId; // Store the timer ID

function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("hh").textContent = hours.toString().padStart(2, '0');
    document.getElementById("mm").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("ss").textContent = seconds.toString().padStart(2, '0');

    if (totalSeconds > 0) {
        totalSeconds--;
        timerId = setTimeout(updateTimer, 1000);
    } else {
        // When timer ends, show button again
        document.getElementById("timeButton").style.display = "inline-block";
    }
}

document.getElementById("timeButton").addEventListener("click", function() {
    // Generate a random discount between 30% and 50%
    let discount = Math.floor(Math.random() * 21) + 30;
    document.getElementById("offerOffTime").textContent = `Congrats!! You Got ${discount}% Off!`;

    // Hide the button after clicking
    this.style.display = "none";

    // Show the realTime div
    document.getElementById("realTime").style.display = "block";

    // Clear existing timer and restart
    clearTimeout(timerId);
    totalSeconds = 24 * 3600; // Reset to 24 hours
    updateTimer();
});

//  images
const imageLinks = [
    "https://images.news18.com/ibnlive/uploads/2023/04/collage-maker-28-apr-2023-10-26-am-2015.jpg",
    "https://circleofcricket.com/post_image/post_image_73c90a2.jpg",
    "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/46a9/d97a/bd1d/ff21/844e/38c7/2697/cbaf/7063/d32e/d32e.jpg",
    "https://static.fibre2fashion.com/Newsresource/images/287/wrogn-virat-kohli_299471.jpg",
    "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-hc0gtlv4gibaeph5ki9lk1ela4-20181026142727.Medi.jpeg",
    "https://static.iwmbuzz.com/wp-content/uploads/2020/02/virat-kohli-the-superstar-fashion-icon-920x518.jpg",
    "https://wallpapers.com/images/featured/virat-kohli-hd-4xn8tpvsfu24241p.jpg",
    "https://wallpapers.com/images/hd/cool-virat-kohli-lb4kdil54mb0xfda.jpg"
];

let currentIndex = 0;

const popupSlider = document.getElementById("popupSlider");
const popupBackground = document.getElementById("popupBackground");
const popupImage = document.getElementById("popupImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const buttonSlider = document.getElementById("buttonSlider");
const closePopup = document.getElementById("closePopup");

// Open popup
buttonSlider.addEventListener("click", () => {
    popupSlider.style.display = "block";
    popupBackground.style.display = "block";
    updateImage();
});

// Close popup
closePopup.addEventListener("click", closeSlider);
popupBackground.addEventListener("click", closeSlider);

function closeSlider() {
    popupSlider.style.display = "none";
    popupBackground.style.display = "none";
}

// Update image in the slider
function updateImage() {
    popupImage.src = imageLinks[currentIndex];
}

// Navigate left
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
    updateImage();
});

// Navigate right
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageLinks.length;
    updateImage();
});

// JOKE VIA API
let JokeStart = document.querySelector("#JokeStart");
let JokeEnd = document.querySelector("#JokeEnd");
let nextJokeButton = document.querySelector("#nextJokeButton");

function getNewJoke() {

  fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist') //
    .then(response => response.json()).then(data => {

      if (data.type === 'twopart') {

        JokeStart.textContent = "Setup: " + data.setup;    
        JokeEnd.textContent = "Delivery: " +data.delivery;  
      } else {

        JokeStart.textContent = data.joke;    
        JokeEnd.textContent = '';           
      }
    })
    .catch(error => console.error('Error fetching joke:', error));
}

getNewJoke();


function handleSectionClick(sectionId) {
    // Hide all section data divs
    const allSections = document.querySelectorAll('#sectionDataCut > div');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section's corresponding content
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex'; // Set it to 'flex' to make it visible
    }
}

// Add event listeners for the left-side sections
document.getElementById('section1').addEventListener('click', function() {
    handleSectionClick('sectionWhatsNew');
});

document.getElementById('section2').addEventListener('click', function() {
    handleSectionClick('sectionDeals');
});

document.getElementById('section3').addEventListener('click', function() {
    handleSectionClick('sectionTrends');
});

document.getElementById('section4').addEventListener('click', function() {
    handleSectionClick('sectionSteals');
});

document.getElementById('section5').addEventListener('click', function() {
    handleSectionClick('sectionHype');
});

document.getElementById('section6').addEventListener('click', function() {
    handleSectionClick('sectionFeature');
});

document.getElementById('section7').addEventListener('click', function() {
    handleSectionClick('sectionSports');
});
