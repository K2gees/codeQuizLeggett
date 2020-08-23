window.onload = function(){
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
    var name = document.forms["welcome-form"]["name"].value;

    //store player names
    sessionStorage.setItem("name", name);

    location.href ="quiz.html"
}

let questionCount = 0;

function next() {
    questionCount++;
    show(questionCount);

}

function show(count){
    let question = document.getElementById("questions");

    question.innerHTML = "<h2>" + questions[count].question  + "</h2>";

}
//Create score for each correct answer

//Subtract time for each incorrect answer

//add input to log name and score
