// =============================
// 1. LISTE DES DÉPARTEMENTS
// =============================
const departements = [
    { nom: "Ain", numero: "01" },
    { nom: "Aisne", numero: "02" },
    { nom: "Allier", numero: "03" },
    { nom: "Alpes-de-Haute-Provence", numero: "04" },
    { nom: "Hautes-Alpes", numero: "05" },
    // ...
    // Ajoute ici les 101 départements
];


// =============================
// 2. ELEMENTS DU DOM
// =============================
const mode1Btn = document.getElementById("mode1-btn");

const quizSection = document.getElementById("quiz-section");
const questionBox = document.getElementById("question");
const answersContainer = document.getElementById("answer-buttons");

const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

const resultSection = document.getElementById("result-section");
const finalScore = document.getElementById("final-score");

const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");


// =============================
// 3. VARIABLES DU JEU
// =============================
let score = 0;
let timeLeft = 60;
let timerInterval = null;


// =============================
// 4. LANCER LE MODE 1
// =============================
mode1Btn.addEventListener("click", startMode1);

function startMode1() {
    // Reset
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = "0";

    resultSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    generateQuestionMode1();
    startTimer();
}


// =============================
// 5. GENERATION QUESTION MODE 1
// =============================
function generateQuestionMode1() {

    // Choix du département aléatoire
    const randomDep = departements[Math.floor(Math.random() * departements.length)];

    questionBox.textContent = randomDep.nom;

    // Ensemble de réponses incorrectes
    let wrongAnswers = departements
        .filter(d => d.numero !== randomDep.numero)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map(d => d.numero);

    // Mélange avec la bonne réponse
    let options = [...wrongAnswers, randomDep.numero].sort(() => Math.random() - 0.5);

    // Effacer anciens boutons
    answersContainer.innerHTML = "";

    // Créer les 5 boutons réponses
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = option;

        btn.addEventListener("click", () => handleAnswer(option, randomDep.numero));
        answersContainer.appendChild(btn);
    });
}


// =============================
// 6. VERIFICATION DES REPONSES
// =============================
function handleAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        scoreDisplay.textContent = score;
    }

    generateQuestionMode1();
}


// =============================
// 7. TIMER
// =============================
function startTimer() {

    timerDisplay.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}


// =============================
// 8. FIN DU JEU
// =============================
function endGame() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    finalScore.textContent = score;
}


// =============================
// 9. RECOMMENCER + RETOUR ACCUEIL
// =============================
restartBtn.addEventListener("click", startMode1);
homeBtn.addEventListener("click", () => {
    resultSection.classList.add("hidden");
});
