let slideIndex = 1;
let slides = document.getElementsByClassName("question-slides");
let playerNameText = document.querySelector("#player-name");
let playerScoreText = document.querySelector("#player-score");
let playerName;
let gameStartTime;
let nameInput = document.getElementById("games-input");
let nameValidator = document.querySelector("#input-validation");
let startBtn = document.querySelector("#game-btn");
let dotOne = document.querySelector("#loading-dot-1");
let dotTwo = document.querySelector("#loading-dot-2");
let dotThree = document.querySelector("#loading-dot-3");
let loadingPercent = document.querySelector("#loading-percent");
let loadingFunText = document.querySelector("#loading-fun-text");
let questionTimer;
let nextQuestionTimer;
let timeLoaded;
let clickTime;
let bonusTime;
let pointsAchieved = 0;
let answerOne;
let answerTwo;
let answerThree;
let answerFour;
let answerFive;
let countDowns;
let secondsCountdownOne;
let secondsCountdownTwo;
let secondsCountdownThree;
let secondsCountdownFour;
let secondsCountdownFive;
let stopSecondsCountdownOne;
let stopSecondsCountdownTwo;
let stopSecondsCountdownThree;
let stopSecondsCountdownFour;
let stopSecondsCountdownFive;
let millisecondsCountdownOne;
let millisecondsCountdownTwo;
let millisecondsCountdownThree;
let millisecondsCountdownFour;
let millisecondsCountdownFive;
let secondsOne = 10;
let secondsTwo = 10;
let secondsThree = 10;
let secondsFour = 10;
let secondsFive = 10;
let millisecondsOne = 1000;
let millisecondsTwo = 1000;
let millisecondsThree = 1000;
let millisecondsFour = 1000;
let millisecondsFive = 1000;
let countdownCircle = document.querySelectorAll(".countdown-wrap");
let countdownText = document.querySelectorAll(".timer");
let secondsText = document.querySelectorAll(".timer-seconds");
let millisecondsText = document.querySelectorAll(".timer-milliseconds");
let trackOne = document.querySelectorAll(".question-track-1");
let trackTwo = document.querySelectorAll(".question-track-2");
let trackThree = document.querySelectorAll(".question-track-3");
let trackFour = document.querySelectorAll(".question-track-4");
let trackFive = document.querySelectorAll(".question-track-5");
let funTexts = ["Fetching random questions from the internet", "Sourcing the answers from random places", "Filling in some wrong options to confuse you", "Sending you off to battle"];
answerOne = "Madrid";
answerTwo = "Black Widow";
answerThree = "Femur";
answerFour = "Netherlands";
answerFive = "1995";

window.addEventListener("load", () => {
    showSlides(slideIndex);
})

nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9a-zA-Z\-\_]/g, '').slice(0, 10);

    if (e.target.value.length < 2 || e.target.value.length > 10) {
        nameValidator.classList.replace("bg-black", "bg-red");
        nameValidator.classList.replace("bg-green", "bg-red");
    } else if (e.target.value.toUpperCase() == "GIYU" || e.target.value.toUpperCase() == "CODEGIYU") {
        nameValidator.classList.replace("bg-black", "bg-red");
        nameValidator.classList.replace("bg-green", "bg-red");
    } else {
        nameValidator.classList.replace("bg-black", "bg-green");
        nameValidator.classList.replace("bg-red", "bg-green");
    }

    if (nameValidator.classList.contains("bg-green")) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
})

startBtn.addEventListener("click", () => {
    playerName = nameInput.value;

    nextQuestion(1);
    console.log(playerName);
})

function loadingScreen() {
    dotsCycleOne();
    setTimeout( () => {
        dotsCycleTwo();
    }, 2000);
    setTimeout( () => {
        dotsCycleThree();
    }, 4000);
    setTimeout( () => {
        dotsCycleFour();
    }, 6000);
    setTimeout( () => {
        // showSlides(3);
        nextQuestion(1);
        console.log(slideIndex);
        // questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
    }, 8000);
}

function dotsCycleOne() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[0];
    loadingCountUp(15);

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function dotsCycleTwo() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[1];
    loadingCountUp(45);

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function dotsCycleThree() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[2];
    loadingCountUp(80);

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function dotsCycleFour() {
    dotOne.classList.replace("text-white", "text-transparent");
    dotTwo.classList.replace("text-white", "text-transparent");
    dotThree.classList.replace("text-white", "text-transparent");
    loadingFunText.innerHTML = funTexts[3];

    setTimeout( () => {
        dotOne.classList.replace("text-transparent", "text-white");
    }, 500);
    setTimeout( () => {
        dotTwo.classList.replace("text-transparent", "text-white");
        loadingCountUp(100);
    }, 1000);
    setTimeout( () => {
        dotThree.classList.replace("text-transparent", "text-white");
    }, 1500);
}

function loadingCountUp(n) {
    let countUp = setInterval( () => {
        let currentNumber = loadingPercent.innerHTML;
        if (currentNumber < n) {
            // console.log(currentNumber);
            currentNumber++;
        }
        loadingPercent.innerHTML = currentNumber;
        if (currentNumber == n) {
            clearInterval(countUp);
        }
    }, 25)
}

function showSlides(n) {
    let i;
    
    if (n == slides.length + 1) {
        clearInterval(questionTimer);
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slides[n-1].style.display = "block";

        if (n == 2) {
            loadingScreen();
        }

        timeLoaded = new Date();
        if (n == 3) {
            gameStartTime = timeLoaded;
            console.log(gameStartTime);
        }
        console.log(slideIndex);

        if (n > 2 && n < 8) {
            clearInterval(questionTimer);
            questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
            console.log("moving on")
        } else {
            console.log("cleared timer")
            clearInterval(questionTimer);
        }
    }
    
    countDowns = setTimeout( () => {
        if (slideIndex == 3) {
            secondsCountdownOne = setInterval(function() {
                countdownCircle[0].classList.replace("grey-border", "green-border");
                countdownText[0].classList.replace("text-white", "text-green");
                secondsOne--;
                if (secondsOne == 0) {
                    clearInterval(secondsCountdownOne);
                }
                if (secondsOne == 4) {
                    countdownCircle[0].classList.replace("green-border", "red-border");
                    countdownText[0].classList.replace("text-green", "text-red");
                }
                secondsText[0].innerHTML = secondsOne;
            }, 1000);
        } else if (slideIndex == 4) {
            secondsCountdownTwo = setInterval(function() {
                countdownCircle[1].classList.replace("grey-border", "green-border");
                countdownText[1].classList.replace("text-white", "text-green");
                secondsTwo--;
                if (secondsTwo == 0) {
                    clearInterval(secondsCountdownTwo);
                }
                if (secondsTwo == 4) {
                    countdownCircle[1].classList.replace("green-border", "red-border");
                    countdownText[1].classList.replace("text-green", "text-red");
                }
                secondsText[1].innerHTML = secondsTwo;
            }, 1000);
        } else if (slideIndex == 5) {
            secondsCountdownThree = setInterval(function() {
                countdownCircle[2].classList.replace("grey-border", "green-border");
                countdownText[2].classList.replace("text-white", "text-green");
                secondsThree--;
                if (secondsThree == 0) {
                    clearInterval(secondsCountdownThree);
                }
                if (secondsThree == 4) {
                    countdownCircle[2].classList.replace("green-border", "red-border");
                    countdownText[2].classList.replace("text-green", "text-red");
                }
                secondsText[2].innerHTML = secondsThree;
            }, 1000);
        } else if (slideIndex == 6) {
            secondsCountdownFour = setInterval(function() {
                countdownCircle[3].classList.replace("grey-border", "green-border");
                countdownText[3].classList.replace("text-white", "text-green");
                secondsFour--;
                if (secondsFour == 0) {
                    clearInterval(secondsCountdownFour);
                }
                if (secondsFour == 4) {
                    countdownCircle[3].classList.replace("green-border", "red-border");
                    countdownText[3].classList.replace("text-green", "text-red");
                }
                secondsText[3].innerHTML = secondsFour;
            }, 1000);
        } else if (slideIndex == 7) {
            secondsCountdownFive = setInterval(function() {
                countdownCircle[4].classList.replace("grey-border", "green-border");
                countdownText[4].classList.replace("text-white", "text-green");
                secondsFive--;
                if (secondsFive == 0) {
                    clearInterval(secondsCountdownFive);
                }
                if (secondsFive == 4) {
                    countdownCircle[4].classList.replace("green-border", "red-border");
                    countdownText[4].classList.replace("text-green", "text-red");
                }
                secondsText[4].innerHTML = secondsFive;
            }, 1000);
        }
    }, 3000);
}

function showAnswer(n) {
    clearInterval(questionTimer);
    console.log(`slideIndex is ${slideIndex}`)
    let allOptions = document.querySelectorAll(`.q${n-2}-options`);
    allOptions.forEach(option => {
        option.checked = true;
        option.parentElement.classList.replace("dark-grey-border", "red-border");
        option.previousElementSibling.classList.replace("text-grey-2", "text-red");
        option.style.backgroundImage = "url('img/redx-1.png')";
    })
    if (n == 3) {
        let correctOption = document.querySelector(`.q${n-2}-options[value='${answerOne}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackOne.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 4) {
        let correctOption = document.querySelector(`.q${n-2}-options[value='${answerTwo}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackTwo.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 5) {
        let correctOption = document.querySelector(`.q${n-2}-options[value='${answerThree}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackThree.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 6) {
        let correctOption = document.querySelector(`.q${n-2}-options[value='${answerFour}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackFour.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 7) {
        let correctOption = document.querySelector(`.q${n-2}-options[value='${answerFive}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackFive.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
        
        playerNameText.innerHTML = playerName;
        playerScoreText.innerHTML = pointsAchieved;
        if (pointsAchieved < 500) {
            playerScoreText.classList.add("text-red");
        } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
            playerScoreText.classList.add("text-blue");
        } else {
            playerScoreText.classList.add("text-green");
        }
    }
    
    if (slideIndex < 8) {
        console.log(`this is slide ${slideIndex}`);
        nextQuestionTimer = setTimeout( () => { nextQuestion(2)}, 2000);
    }
}

function nextQuestion(n) {
    clearInterval(questionTimer);
    clearTimeout(nextQuestionTimer);
    
    // if (slideIndex != slides.length + 1) {
        showSlides(slideIndex += 1);

        // if(slideIndex > 2 && slideIndex < 8) {
        //     questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
        // }
    // }
}

let radios = document.querySelectorAll('input[type="checkbox"]');

radios.forEach(radio => {
    radio.addEventListener("click", () => {
        let radioName = radio.getAttribute("class");
        let radioQuestion = radioName.charAt(1);

        if (radioQuestion == 1) {
            stopSecondsCountdownOne = clearInterval(secondsCountdownOne);
        } else if (radioQuestion == 2) {
            stopSecondsCountdownTwo = clearInterval(secondsCountdownTwo);
        } else if (radioQuestion == 3) {
            stopSecondsCountdownThree = clearInterval(secondsCountdownThree);
        } else if (radioQuestion == 4) {
            stopSecondsCountdownFour = clearInterval(secondsCountdownFour);
        } else if (radioQuestion == 5) {
            stopSecondsCountdownFive = clearInterval(secondsCountdownFive);
            clearTimeout(countDowns);
        }
        
        radio.parentElement.classList.replace("dark-grey-border", "blue-border");
        radio.previousElementSibling.classList.replace("text-grey-2", "text-blue");

        let radioGroup = document.getElementsByClassName(radioName);

        for (let i = 0; i < radioGroup.length; i++) {
            radioGroup[i].disabled = true;
        }

        clickTime = new Date();
        bonusTime = clickTime - timeLoaded;

        if (bonusTime - 3000 < 0) {
            pointsAchieved += 100;
        } else {
            pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 100);
        }

        console.log(bonusTime);
        console.log(pointsAchieved);
        clearInterval(questionTimer);
        nextQuestionTimer = setTimeout( () => { nextQuestion(2)}, 3000);

        setTimeout( () => {
            if (radioQuestion == 1) {
                if (radio.value == answerOne) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackOne.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerOne}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackOne.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }
            } else if (radioQuestion == 2) {
                if (radio.value == answerTwo) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackTwo.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerTwo}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackTwo.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 3) {
                if (radio.value == answerThree) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackThree.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerThree}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackThree.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 4) {
                if (radio.value == answerFour) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackFour.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerFour}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackFour.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 5) {
                if (radio.value == answerFive) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackFive.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                    playerNameText.innerHTML = playerName;
                    playerScoreText.innerHTML = pointsAchieved;
                    if (pointsAchieved < 500) {
                        playerScoreText.classList.add("text-red");
                    } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
                        playerScoreText.classList.add("text-blue");
                    } else {
                        playerScoreText.classList.add("text-green");
                    }
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerFive}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackFive.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                    playerNameText.innerHTML = playerName;
                    playerScoreText.innerHTML = pointsAchieved;
                    if (pointsAchieved < 500) {
                        playerScoreText.classList.add("text-red");
                    } else if (pointsAchieved >= 500 && pointsAchieved < 800) {
                        playerScoreText.classList.add("text-blue");
                    } else {
                        playerScoreText.classList.add("text-green");
                    }
                }            
            }
        }, 1000)
    })
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})