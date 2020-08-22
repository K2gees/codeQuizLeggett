var startBtn = document.querySelector("#start-btn")
var questionContainer = document.querySelector(".question-container")
var countDownTimer = document.createElement("div");
countDownTimer.className = "time-remaining";


startBtn.addEventListener("click", function(){
    console.log("clicked")
questionContainer.setAttribute("style", "display: block !important")
})

// Create Question Array
var questionArr = [
    {
        questionTitle: "Question ABC",
        choices:Array,
        answer: "Blah"
    },
    {
        questionTitle: "Question ABC",
        choices:Array,
        answer: "Blah"
    },

]

//Create score for each correct answer

//Subtract time for each incorrect answer

//add input to log name and score
