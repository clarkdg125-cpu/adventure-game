//Tracks where the player
let currentState = "start";

//References to the page elements updated
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const conclusionEl = document.getElementById("conclusion");
const nextBtn = document.getElementById("next-btn");


/**
 * Creates a choice button and adds it to the answers list
 * @param {string} text - The text shown on the button
 * @param {string} nextState - The story state this choice leads to
 */
function addAnswerButton(text, nextState) {
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = text;

    button.addEventListener("click", () => {
        currentState = nextState;
        renderQuestion();
    });

    listItem.appendChild(button);
    answersEl.appendChild(listItem);
}

//Shows the story text and choices for the current state
function renderQuestion() {
    answersEl.textContent = "";

    switch (currentState) {
        case "start":
            questionEl.textContent =
                "You are a pirate searching for hidden treasure. One day, you find a treasure map that leads to a mysterious island. Make your choices carefully to find the treasure and avoid danger. What will you do?";
            addAnswerButton("Face the enemy pirates", "pirates");
            addAnswerButton("Explore the island", "island");
            addAnswerButton("Survive the storm", "storm");
            break;

        default:
            questionEl.textContent = "blank";
            addAnswerButton("Back to the start", "start");
    }
}

window.onload = () => {
    renderQuestion();
};