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

        //Path 1: Enemy Pirates
        case "pirates":
            questionEl.textContent = "You meet a group of enemy pirates. What will you do?";
            addAnswerButton("Fight the pirates", "pirates_fight");
            addAnswerButton("Run away", "pirates_run");
            break;

        case "pirates_fight":
            questionEl.textContent = "You chose to fight the pirates. What will you do next?";
            addAnswerButton("Take their treasure map", "pirates_map");
            addAnswerButton("Escape to the island", "pirates_escape");
            break;

        case "pirates_run":
            questionEl.textContent = "You chose to run away. What will you do next?";
            addAnswerButton("Take their treasure map", "pirates_map");
            addAnswerButton("Escape to the island", "pirates_escape");
            break;

        case "pirates_map":
            questionEl.textContent = "You take their treasure map. You now have a new map!";
            addAnswerButton("Continue", "treasure");
            break;

        case "pirates_escape":
            questionEl.textContent = "You escape to the island safely!";
            addAnswerButton("Continue", "treasure");
            break;

        //Path 2: The Island
        case "island":
            questionEl.textContent = "You arrive at the island where the treasure is hidden. What will you do?";
            addAnswerButton("Explore a cave", "island_cave");
            addAnswerButton("Search the beach", "island_beach");
            break;

        case "island_cave":
            questionEl.textContent = "You chose to explore a cave. What will you do next?";
            addAnswerButton("Open a mysterious chest", "island_chest");
            addAnswerButton("Follow footprints into the forest", "island_forest");
            break;

        case "island_beach":
            questionEl.textContent = "You chose to search the beach. What will you do next?";
            addAnswerButton("Open a mysterious chest", "island_chest");
            addAnswerButton("Follow footprints into the forest", "island_forest");
            break;
           
        case "island_chest":
            questionEl.textContent = "You open the mysterious chest and find a clue that leads to the treasure!";
            addAnswerButton("Continue", "treasure");
            break;   
            
        
        case "island_forest":
            questionEl.textContent = "You follow the footprints into the forest and find a clue that leads to the treasure!";
            addAnswerButton("Continue", "treasure");
            break;

        //Path 3: The Storm
        case "storm":
            questionEl.textContent = "A storm appears while you sail toward the island. What will you do?";
            addAnswerButton("Sail through the storm", "storm_sail");
            addAnswerButton("Find shelter", "storm_shelter");
            break;
        
        case "storm_sail":
            questionEl.textContent = "You chose to sail through the storm. What will you do next?";
            addAnswerButton("Repair the ship", "storm_repair");
            addAnswerButton("Use a lifeboat to reach the island", "storm_lifeboat");
            break;
    
        case "storm_shelter":
            questionEl.textContent = "You chose to find shelter. What will you do next?";
            addAnswerButton("Repair the ship", "storm_repair");
            addAnswerButton("Use a lifeboat to reach the island", "storm_lifeboat");
            break;

        case "storm_repair":
            questionEl.textContent = "You repair the ship, survive the storm, and reach the island!";
            addAnswerButton("Continue", "treasure");
            break;

        case "storm_lifeboat":
            questionEl.textContent = "You take the lifeboat, survive the storm, and reach the island!";
            addAnswerButton("Continue", "treasure");
            break;
        
        
        //Ending
        case "treasure":
            questionEl.textContent = "You reach the treasure chest. When you open it, you discover a pile of gold and jewels!";
            conclusionEl.textContent = "You win the adventure!";
            conclusionEl.classList.remove("hidden");
            nextBtn.classList.remove("hidden");
            break;

        default:
            questionEl.textContent = "Something went wrong. Let's start over.";
            addAnswerButton("Back to the start", "start");
    }
}

//Restarts the game from the beginning
nextBtn.addEventListener("click", () => {
    currentState = "start";
    renderQuestion();
});

window.onload = () => {
    renderQuestion();
};