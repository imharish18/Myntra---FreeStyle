function darkModeOn(value){
        let body = document.querySelector("body");
        let header = document.querySelector("#header");
        let headerText = document.querySelectorAll(".headerText");
        let textPlace = document.querySelectorAll("#textPlace");
        let glassImage = document.querySelectorAll("#glassImage");
        
        if(value){
            body.style.backgroundColor = "#1A1A1A"
            document.querySelector("input").style.caretColor = "white";

            headerText.forEach((element) => {
                element.style.color = "#D4D4D4"; 
            }); 

            textPlace.forEach((element) => {
                element.style.backgroundColorColor = "#292929"; 
            }); 
            glassImage.forEach((element) => {
                element.style.filter = "invert(100%) brightness(200%)";
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
            headerText.forEach((element) => {
                element.style.color = "black"; 
            });
            glassImage.forEach((element) => {
                element.style.filter = "invert(100%) brightness(-200%)";
            });

            header.style.backgroundColor = "white"; 
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
let imageTimeOffer = document.querySelector("#imageTimeOffer");

function givingOffer(val) {
    let offerReward = document.querySelector("#offerReward");
    offerReward.classList.remove("offerRewardWork");
    stopConfetti = false; 
    let discountValue = document.querySelector("#discountValue");
    discountValue.textContent = val;
    
}

function closingOffer() {
    let offerReward = document.querySelector("#offerReward");
    offerReward.classList.add("offerRewardWork");
    stopConfetti = true;
}
let discountValue = document.querySelector("#discountValue");
document.addEventListener("DOMContentLoaded", () => {
    let offer = document.querySelector(".offer");

    offer.addEventListener("click", () => {
        givingOffer(Math.floor(Math.random() * 11) + 40);
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
        removeButton.textContent = "x";


        const doneButton = document.createElement("button");
        doneButton.id = "addButton";
        doneButton.textContent = "✔";
        doneButton.style.color = "white";


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
        nextJokeButton.textContent = "Another";
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
nextJokeButton.addEventListener("click",getNewJoke)

function updateClock() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("min");
    const secondsElement = document.getElementById("sec");
  
    const now = new Date();
  

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if(now.getHours < 12){
        hoursElement.innerHTML = hours + " PM";
    }
    else{
        hoursElement.innerHTML = hours + " AM";
    }
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  
// QUIZ
document.addEventListener("DOMContentLoaded", function () {
    const quizSection = document.getElementById("quizSection");
    const quizPopUp = document.getElementById("quizPopUp");
    const quizPopupContent = document.getElementById("quizPopupContent");
    const quizStartButton = document.getElementById("quizStartButton");
    const quizStartButtonRealStart = document.getElementById("quizStartButtonRealStart");
    const quizRules = document.getElementById("quizRules");
    const topHeadingQuiz = document.getElementById("topHeadingQuiz");
    const midHeadQuiz = document.getElementById("midHeadQuiz");
    const quizFooter = document.getElementById("quizFooter");
    const quizEnd = document.getElementById("quizEnd");
    const quizQuestion = document.getElementById("quizQuestion");
    const options = document.querySelectorAll(".quizOption");
    const scoreDisplay = document.getElementById("Score");
    const quizTimeCount = document.getElementById("quizTimeCount");
    const restartQuiz = document.getElementById("restartQuiz");
    const skipQuiz = document.getElementById("skipQuiz");
    const closeQuiz = document.getElementById("closeQuiz");
    const submitQuiz = document.getElementById("submitQuiz");
    const quizScoreNumber = document.getElementById("quizScoreNumber");
    const quizEndYayy = document.getElementById("quizEndButtonRealStart");
    
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;

    async function loadQuestions() {
        const response = await fetch("href/questions.json");
        questions = await response.json();
        questions = questions.sort(() => Math.random() - 0.5);
        startQuiz();
    }

    function showQuizRules() {
        quizPopUp.style.display = "flex";
        quizPopupContent.style.display = "flex";
        quizRules.style.display = "flex";
        quizRules.style.flexDirection = "column";
        topHeadingQuiz.style.display = "none";
        midHeadQuiz.style.display = "none";
        midHeadQuiz.style.flexDirection = "column";
        quizFooter.style.display = "none";
        quizEnd.style.display = "none";
    }

    function startQuiz() {
        quizRules.style.display = "none";
        topHeadingQuiz.style.display = "flex";
        midHeadQuiz.style.display = "flex";
        quizFooter.style.display = "flex";
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex >= 10 || currentQuestionIndex >= questions.length) {
            endQuiz();
            return;
        }
        
        let currentQuestion = questions[currentQuestionIndex];
        quizQuestion.textContent = `Q${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        
        options.forEach((option, index) => {
            let optionKey = String.fromCharCode(65 + index);
            option.textContent = `${optionKey}. ${currentQuestion[optionKey]}`;
            option.onclick = () => checkAnswer(optionKey, currentQuestion.answer);
        });

        resetTimer();
    }

    function resetTimer() {
        clearInterval(timer);
        let timeLeft = 30;
        quizTimeCount.textContent = timeLeft;
        timer = setInterval(() => {
            timeLeft--;
            quizTimeCount.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                currentQuestionIndex++;
                loadQuestion();
            }
        }, 1000);
    }

    function blinkBackground(color, times, interval, callback) {
        let count = 0;
        let originalColor = quizPopupContent.style.background;
        let blinkInterval = setInterval(() => {
            quizPopupContent.style.background = count % 2 === 0 ? color : originalColor;
            count++;
            if (count === times * 2) {
                clearInterval(blinkInterval);
                quizPopupContent.style.background = originalColor;
                if (callback) callback();
            }
        }, interval);
    }

    function checkAnswer(selected, correct) {
        clearInterval(timer);
        if (selected === correct) {
            score += 5;
            blinkBackground("#52a447", 1, 200, () => {
                currentQuestionIndex++;
                loadQuestion();
            });
        } else {
            score -= 3;
            blinkBackground("red", 2, 200, () => {
                currentQuestionIndex++;
                loadQuestion();
            });
        }
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function endQuiz() {
        topHeadingQuiz.style.display = "none";
        midHeadQuiz.style.display = "none";
        quizFooter.style.display = "none";
        quizEnd.style.display = "flex";
        quizEnd.style.flexDirection = "column";
        quizScoreNumber.textContent = `Final Score: ${score}`;
    }

    quizStartButton.onclick = showQuizRules;
    quizStartButtonRealStart.onclick = loadQuestions;
    restartQuiz.onclick = loadQuestions;
    skipQuiz.onclick = () => {
        clearInterval(timer);
        currentQuestionIndex++;
        loadQuestion();
    };
    
    closeQuiz.onclick = () => {
        quizPopUp.style.display = "none";
        quizPopupContent.style.display = "none";
    };
    
    quizPopUp.onclick = (event) => {
        if (event.target === quizPopUp) {
            quizPopUp.style.display = "none";
            quizPopupContent.style.display = "none";
        }
    };
    
    submitQuiz.onclick = () => {
        endQuiz();
    };
    quizEndYayy.onclick = () => {
        endQuiz();
        givingOffer(score>5 ? score : 5);
        work1();
        quizPopUp.style.display = "none";
    };
});

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        let offset = 100; // Margin from the top
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
// API URL
function aqIndex(aqi, element){
    if (aqi === 1) element = "Good";
    else if (aqi === 2) element.textContent = `AQI: ${aqi} Moderate`;
    else if (aqi === 3) element.textContent = `AQI: ${aqi} Sensitive`;
    else if (aqi === 4) element.textContent = `AQI: ${aqi} Unhealthy`;
    else if (aqi === 5) element.textContent = `AQI: ${aqi} V.Unhealthy`;
    else if (aqi === 6) element.textContent = `AQI: ${aqi} Hazardous`;
}
function cloudPer(cloudVal, element){
    let cloud = cloudVal;
        if (cloud >= 0 && cloud < 10) {
            element.textContent = "☀️ Clear Sky";
        } else if (cloud >= 10 && cloud < 30) {
            element.textContent = "🌤️ Mostly Clear";
        } else if (cloud >= 30 && cloud < 50) {
            element.textContent = "⛅ Cloudy Sky";
        } else if (cloud >= 50 && cloud < 70) {
            element.textContent = "🌥️ Mostly Cloudy";
        } else if (cloud >= 70 && cloud <= 100) {
            element.textContent = "☁️ Overcast";
        }
}
function tempCF(c, f, element) {
    let isCelsius = false;
    element.textContent = `${c}°C`

    setInterval(() => {
        element.textContent = isCelsius ? `${c}°C` : `${f}°F`;
        isCelsius = !isCelsius; 
    }, 3000);
}

function storeAndRedirect(event, sectionId) {
    event.preventDefault(); // Prevent default anchor behavior
    localStorage.setItem("scrollTarget", sectionId); // Store section ID
    window.location.href = "href/redirect1.html"; // Redirect manually
}
