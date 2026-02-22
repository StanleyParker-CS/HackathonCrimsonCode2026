console.log("JavaScript is connected!");




function create(){
    alert("button is working!")
}
function clearTabs() {
   console.log("JavaScript is connected!");




function create(){
    alert("button is working!")
}
function clearTabs() {
   
}
function removeTabs() {


    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}
//opens a tab
function openTab(evt, tabName) {
   
    // Declare variables
    let i, tabcontent, tablinks;


    // Hide all tabcontent
    removeTabs();


    // Remove active class from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");


    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    // Show selected tab
    document.getElementById(tabName).style.display = "block";


    // Add active class to clicked button
    evt.currentTarget.className += " active";
   
}


   










//Derivative PROBLEMS:


let currentProblemType = null;
let currentProblem = null;
let currentDifficulty = null;


let derivEasy =
[
  { question: "d/dx (x^2)", answer: "2x" },
  { question: "d/dx (x^3)", answer: "3x^2" },
  { question: "d/dx (5x)", answer: "5" },
  { question: "d/dx (7)", answer: "0" },
  { question: "d/dx (x^4)", answer: "4x^3" }
];




let derivMedium = [
  { question: "d/dx (x^5 + 3x^2)", answer: "5x^4 + 6x" },
  { question: "d/dx (sin(x))", answer: "cos(x)" },
  { question: "d/dx (2x^3 - 4x)", answer: "6x^2 - 4" },
  { question: "d/dx (cos(x))", answer: "-sin(x)" },
  { question: "d/dx (e^x)", answer: "e^x" }
];


let derivHard = [
  { question: "d/dx (x^2 * sin(x))", answer: "2x*sin(x) + x^2*cos(x)" },
  { question: "d/dx (sin(3x))", answer: "3cos(3x)" },
  { question: "d/dx (e^x / x)", answer: "(e^x * x - e^x) / x^2" },
  { question: "d/dx (tan(x))", answer: "sec^2(x)" },
  { question: "d/dx ((x^2 + 1)^3)", answer: "6x(x^2 + 1)^2" }
];


let chainEasy =
[
    { question: "d/dx ( (x + 1)^2 )", answer: "2(x + 1)" },
    { question: "d/dx ( (3x)^3 )", answer: "9(3x)^2" },
    { question: "d/dx ( cos(5x) )", answer: "-5sin(5x)" },
    { question: "d/dx ( (x - 7)^4 )", answer: "4(x - 7)^3" },
    { question: "d/dx ( e^(2x) )", answer: "2e^(2x)" },
];




let chainMedium =
[
    { question: "d/dx ( (x^2 + 1)^3 )", answer: "6x(x^2 + 1)^2" },
    { question: "d/dx ( sin(3x^2) )", answer: "6xcos(3x^2)" },
    { question: "d/dx ( (2x - 1)^5 )", answer: "10(2x - 1)^4" },
    { question: "d/dx ( e^(4x^2) )", answer: "8x e^(4x^2)" },
    { question: "d/dx ( cos(x^3) )", answer: "-3x^2 sin(x^3)" },
];


let chainHard =
[
    { question: "d/dx ( (3x^2 - 2)^4 )", answer: "24x(3x^2 - 2)^3" },
    { question: "d/dx ( sin(x^2 + 5x) )", answer: "(2x + 5)cos(x^2 + 5x)" },
    { question: "d/dx ( e^(x^3 - x) )", answer: "(3x^2 - 1)e^(x^3 - x)" },
    { question: "d/dx ( (5x - 3)^6 )", answer: "30(5x - 3)^5" },
    { question: "d/dx ( cos(2x^2) )", answer: "-4x sin(2x^2)" },
];


function selectDifficulty(difficulty)
{
  currentDifficulty = difficulty;
 
  document.getElementById("difficultySelection").style.display = "none";
  document.getElementById("practiceArea").style.display = "block";
 
  document.getElementById("difficultyTitle").textContent =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1) + " Problems";
 
  //document.getElementById("derivativeSelection").style.display = "block";
}






function toggleButton(id)
{
    let section = document.getElementById(id);


    if(section.style.display === "none")
    {
        section.style.display = "block";
    }
    else
    {
        section.style.display = "none";
    }
}


function getProblemType(type)
{
    currentProblemType = type;


    toggleButton(type);


    generateProblem(type);
}




function generateProblem(type) {
    let problemSet;
    // 1. Determine the problem set
    if (type === "derivativeSelection") {
        if (currentDifficulty === "easy") problemSet = derivEasy;
        else if (currentDifficulty === "medium") problemSet = derivMedium;
        else if (currentDifficulty === "hard") problemSet = derivHard;
    } else if (type === "chainRuleSelection") {
        if (currentDifficulty === "easy") problemSet = chainEasy;
        else if (currentDifficulty === "medium") problemSet = chainMedium;
        else if (currentDifficulty === "hard") problemSet = chainHard;
    }


    if (!problemSet) {
        // We use a generic way to show errors or just console.log
        console.error("Please select difficulty + problem type.");
        return;
    }


    // 2. Pick the random problem
    let randomIndex = Math.floor(Math.random() * problemSet.length);
    currentProblem = problemSet[randomIndex];


    // 3. TARGET THE CORRECT HTML (The Fix)
    // We determine the prefix based on the 'type'
    let prefix = (type === "chainRuleSelection") ? "chain" : "deriv";


    document.getElementById(prefix + "ProblemDisplay").textContent = currentProblem.question;
    document.getElementById(prefix + "ResultMessage").textContent = "";
    document.getElementById(prefix + "AnswerInput").value = "";
}


function checkAnswer()
{
    const btn = document.getElementById("checkBtn");
    if(!currentProblem)
    {
        alert("Generate a problem first!");
        return;
    }


    let inputId =
        currentProblemType === "derivativeSelection"
        ? "derivAnswerInput"
        : "chainAnswerInput";


    let resultId =
        currentProblemType === "derivativeSelection"
        ? "derivResultMessage"
        : "chainResultMessage";


    let userAnswer =
        document.getElementById(inputId).value.trim();


    if(userAnswer === currentProblem.answer)
    {
        document.getElementById(resultId).textContent = "Correct!";
        getMoney();
        btn.disbabled = true;
    }
    else
    {
        document.getElementById(resultId).textContent =
            "Incorrect. The answer is: " + currentProblem.answer;
    }
}


function nextProblem()
{
    if(currentProblemType)
        generateProblem(currentProblemType);
}
function toDifficulty()
{
    document.getElementById("difficultySelection").style.display = "block";
    document.getElementById("practiceArea").style.display = "none";
}


function updateDisplay() {
    countDisplay.textContent = playerMoney;
}


function getMoney()
{
    if(currentDifficulty === "easy")
    {
        playerMoney = playerMoney + 10;
            updateDisplay();
        }
        else if(currentDifficulty === "medium")
        {
            playerMoney = playerMoney + 25;
            updateDisplay();
        }
        else if(currentDifficulty === "hard")
        {
            playerMoney = playerMoney + 50;
            updateDisplay();
        }
   
}


}
function removeTabs() {


    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}
//opens a tab
function openTab(evt, tabName) {
   
    // Declare variables
    let i, tabcontent, tablinks;


    // Hide all tabcontent
    removeTabs();


    // Remove active class from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");


    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    // Show selected tab
    document.getElementById(tabName).style.display = "block";


    // Add active class to clicked button
    evt.currentTarget.className += " active";
   
}


   










//Derivative PROBLEMS:


let currentProblemType = null;
let currentProblem = null;
let currentDifficulty = null;


let derivEasy =
[
  { question: "d/dx (x^2)", answer: "2x" },
  { question: "d/dx (x^3)", answer: "3x^2" },
  { question: "d/dx (5x)", answer: "5" },
  { question: "d/dx (7)", answer: "0" },
  { question: "d/dx (x^4)", answer: "4x^3" }
];




let derivMedium = [
  { question: "d/dx (x^5 + 3x^2)", answer: "5x^4 + 6x" },
  { question: "d/dx (sin(x))", answer: "cos(x)" },
  { question: "d/dx (2x^3 - 4x)", answer: "6x^2 - 4" },
  { question: "d/dx (cos(x))", answer: "-sin(x)" },
  { question: "d/dx (e^x)", answer: "e^x" }
];


let derivHard = [
  { question: "d/dx (x^2 * sin(x))", answer: "2x*sin(x) + x^2*cos(x)" },
  { question: "d/dx (sin(3x))", answer: "3cos(3x)" },
  { question: "d/dx (e^x / x)", answer: "(e^x * x - e^x) / x^2" },
  { question: "d/dx (tan(x))", answer: "sec^2(x)" },
  { question: "d/dx ((x^2 + 1)^3)", answer: "6x(x^2 + 1)^2" }
];


let chainEasy =
[
    { question: "d/dx ( (x + 1)^2 )", answer: "2(x + 1)" },
    { question: "d/dx ( (3x)^3 )", answer: "9(3x)^2" },
    { question: "d/dx ( cos(5x) )", answer: "-5sin(5x)" },
    { question: "d/dx ( (x - 7)^4 )", answer: "4(x - 7)^3" },
    { question: "d/dx ( e^(2x) )", answer: "2e^(2x)" },
];




let chainMedium =
[
    { question: "d/dx ( (x^2 + 1)^3 )", answer: "6x(x^2 + 1)^2" },
    { question: "d/dx ( sin(3x^2) )", answer: "6xcos(3x^2)" },
    { question: "d/dx ( (2x - 1)^5 )", answer: "10(2x - 1)^4" },
    { question: "d/dx ( e^(4x^2) )", answer: "8x e^(4x^2)" },
    { question: "d/dx ( cos(x^3) )", answer: "-3x^2 sin(x^3)" },
];


let chainHard =
[
    { question: "d/dx ( (3x^2 - 2)^4 )", answer: "24x(3x^2 - 2)^3" },
    { question: "d/dx ( sin(x^2 + 5x) )", answer: "(2x + 5)cos(x^2 + 5x)" },
    { question: "d/dx ( e^(x^3 - x) )", answer: "(3x^2 - 1)e^(x^3 - x)" },
    { question: "d/dx ( (5x - 3)^6 )", answer: "30(5x - 3)^5" },
    { question: "d/dx ( cos(2x^2) )", answer: "-4x sin(2x^2)" },
];


function selectDifficulty(difficulty)
{
  currentDifficulty = difficulty;
 
  document.getElementById("difficultySelection").style.display = "none";
  document.getElementById("practiceArea").style.display = "block";
 
  document.getElementById("difficultyTitle").textContent =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1) + " Problems";
 
  //document.getElementById("derivativeSelection").style.display = "block";
}






function toggleButton(id)
{
    let section = document.getElementById(id);


    if(section.style.display === "none")
    {
        section.style.display = "block";
    }
    else
    {
        section.style.display = "none";
    }
}


function getProblemType(type)
{
    currentProblemType = type;


    toggleButton(type);


    generateProblem(type);
}




function generateProblem(type) {
    let problemSet;
    // 1. Determine the problem set
    if (type === "derivativeSelection") {
        if (currentDifficulty === "easy") problemSet = derivEasy;
        else if (currentDifficulty === "medium") problemSet = derivMedium;
        else if (currentDifficulty === "hard") problemSet = derivHard;
    } else if (type === "chainRuleSelection") {
        if (currentDifficulty === "easy") problemSet = chainEasy;
        else if (currentDifficulty === "medium") problemSet = chainMedium;
        else if (currentDifficulty === "hard") problemSet = chainHard;
    }


    if (!problemSet) {
        // We use a generic way to show errors or just console.log
        console.error("Please select difficulty + problem type.");
        return;
    }


    // 2. Pick the random problem
    let randomIndex = Math.floor(Math.random() * problemSet.length);
    currentProblem = problemSet[randomIndex];


    // 3. TARGET THE CORRECT HTML (The Fix)
    // We determine the prefix based on the 'type'
    let prefix = (type === "chainRuleSelection") ? "chain" : "deriv";


    document.getElementById(prefix + "ProblemDisplay").textContent = currentProblem.question;
    document.getElementById(prefix + "ResultMessage").textContent = "";
    document.getElementById(prefix + "AnswerInput").value = "";
}


function checkAnswer()
{
    const btn = document.getElementById("checkBtn");
    if(!currentProblem)
    {
        alert("Generate a problem first!");
        return;
    }


    let inputId =
        currentProblemType === "derivativeSelection"
        ? "derivAnswerInput"
        : "chainAnswerInput";


    let resultId =
        currentProblemType === "derivativeSelection"
        ? "derivResultMessage"
        : "chainResultMessage";


    let userAnswer =
        document.getElementById(inputId).value.trim();


    if(userAnswer === currentProblem.answer)
    {
        document.getElementById(resultId).textContent = "Correct!";
        getMoney();
        btn.disbabled = true;
    }
    else
    {
        document.getElementById(resultId).textContent =
            "Incorrect. The answer is: " + currentProblem.answer;
    }
}


function nextProblem()
{
    if(currentProblemType)
        generateProblem(currentProblemType);
}
function toDifficulty()
{
    document.getElementById("difficultySelection").style.display = "block";
    document.getElementById("practiceArea").style.display = "none";
}


function updateDisplay() {
    countDisplay.textContent = playerMoney;
}


function getMoney()
{
    if(currentDifficulty === "easy")
    {
        playerMoney = playerMoney + 10;
            updateDisplay();
        }
        else if(currentDifficulty === "medium")
        {
            playerMoney = playerMoney + 25;
            updateDisplay();
        }
        else if(currentDifficulty === "hard")
        {
            playerMoney = playerMoney + 50;
            updateDisplay();
        }

}
