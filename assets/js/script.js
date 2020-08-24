window.onload = function () {
    show(0);
}

//Questions
let questions = [
    {
        id: 1,
        question: "Which of the following is not considered a JavaScript operator?",
        answer: "this",
        options: [
            "new",
            "this",
            "delete",
            "typeof"
        ]
    },
    {
        id: 2,
        question: "Which of the following best describes JavaScript?",
        answer: "an object-oriented scripting language.",
        options: [
            "a low-level programming language.",
            "a scripting language precompiled in the browser.",
            " a compiled scripting language.",
            "an object-oriented scripting language."
        ]
    },
    {
        id: 3,
        question: "JavaScript entities start with _______ and end with _________.",
        answer: "Ampersand, semicolon",
        options: [
            "Semicolon, colon",
            "Semicolon, Ampersand",
            "Ampersand, colon",
            "Ampersand, semicolon"
        ]
    },
    {
        id: 4,
        question: "What are variables used for in JavaScript Programs?",
        answer: "Storing numbers, dates, or other values",
        options: [
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "None of the above"
        ]
    },
    {
        id: 5,
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        answer: "document.write('Hello World')",
        options: [
            "System.out.println('Hello World')",
            "println ('Hello World')",
            "document.write('Hello World')",
            "response.write('Hello World')"
        ]
    }
];

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;

    //store player names
    sessionStorage.setItem("name", name);

    location.href = "quiz.html"
}

let questionCount = 0;
let point = 0;

function next() {
    let userAnswer = document.querySelector("li.option.active").innerHTML;
    //check answer by user
    if (userAnswer == questions[questionCount].answer) {
        point += 20;
        sessionStorage.setItem("points", point);
    } 
    
    if (questionCount == questions.length - 1) {
        location.href = "end.html";
        return;
    }

    questionCount++;
    show(questionCount);

}

function show(count) {
    let question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + questions[count].question  + "</h2>";
    question.innerHTML = `<h2>Q${questionCount+1}. ${questions[count].question}</h2>
    <ul class="option-group">           
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul> 
    
    `;

    toggleActive();
}
function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");

                }
            }
            option[i].classList.add("active");

        }
    }
}
//Create score for each correct answer

//Subtract time for each incorrect answer

//add input to log name and score
