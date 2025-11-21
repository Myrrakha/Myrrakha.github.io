// Départements complets (101)
const departements = [
    { nom: "Ain", numero: "01" }, { nom: "Aisne", numero: "02" },
    { nom: "Allier", numero: "03" }, { nom: "Alpes-de-Haute-Provence", numero: "04" },
    { nom: "Hautes-Alpes", numero: "05" }, { nom: "Alpes-Maritimes", numero: "06" },
    { nom: "Ardèche", numero: "07" }, { nom: "Ardennes", numero: "08" },
    { nom: "Ariège", numero: "09" }, { nom: "Aube", numero: "10" },
    { nom: "Aude", numero: "11" }, { nom: "Aveyron", numero: "12" },
    { nom: "Bouches-du-Rhône", numero: "13" }, { nom: "Calvados", numero: "14" },
    { nom: "Cantal", numero: "15" }, { nom: "Charente", numero: "16" },
    { nom: "Charente-Maritime", numero: "17" }, { nom: "Cher", numero: "18" },
    { nom: "Corrèze", numero: "19" }, { nom: "Corse-du-Sud", numero: "2A" },
    { nom: "Haute-Corse", numero: "2B" }, { nom: "Côte-d'Or", numero: "21" },
    { nom: "Côtes-d'Armor", numero: "22" }, { nom: "Creuse", numero: "23" },
    { nom: "Dordogne", numero: "24" }, { nom: "Doubs", numero: "25" },
    { nom: "Drôme", numero: "26" }, { nom: "Eure", numero: "27" },
    { nom: "Eure-et-Loir", numero: "28" }, { nom: "Finistère", numero: "29" },
    { nom: "Gard", numero: "30" }, { nom: "Haute-Garonne", numero: "31" },
    { nom: "Gers", numero: "32" }, { nom: "Gironde", numero: "33" },
    { nom: "Hérault", numero: "34" }, { nom: "Ille-et-Vilaine", numero: "35" },
    { nom: "Indre", numero: "36" }, { nom: "Indre-et-Loire", numero: "37" },
    { nom: "Isère", numero: "38" }, { nom: "Jura", numero: "39" },
    { nom: "Landes", numero: "40" }, { nom: "Loir-et-Cher", numero: "41" },
    { nom: "Loire", numero: "42" }, { nom: "Haute-Loire", numero: "43" },
    { nom: "Loire-Atlantique", numero: "44" }, { nom: "Loiret", numero: "45" },
    { nom: "Lot", numero: "46" }, { nom: "Lot-et-Garonne", numero: "47" },
    { nom: "Lozère", numero: "48" }, { nom: "Maine-et-Loire", numero: "49" },
    { nom: "Manche", numero: "50" }, { nom: "Marne", numero: "51" },
    { nom: "Haute-Marne", numero: "52" }, { nom: "Mayenne", numero: "53" },
    { nom: "Meurthe-et-Moselle", numero: "54" }, { nom: "Meuse", numero: "55" },
    { nom: "Morbihan", numero: "56" }, { nom: "Moselle", numero: "57" },
    { nom: "Nièvre", numero: "58" }, { nom: "Nord", numero: "59" },
    { nom: "Oise", numero: "60" }, { nom: "Orne", numero: "61" },
    { nom: "Pas-de-Calais", numero: "62" }, { nom: "Puy-de-Dôme", numero: "63" },
    { nom: "Pyrénées-Atlantiques", numero: "64" }, { nom: "Hautes-Pyrénées", numero: "65" },
    { nom: "Pyrénées-Orientales", numero: "66" }, { nom: "Bas-Rhin", numero: "67" },
    { nom: "Haut-Rhin", numero: "68" }, { nom: "Rhône", numero: "69" },
    { nom: "Haute-Saône", numero: "70" }, { nom: "Saône-et-Loire", numero: "71" },
    { nom: "Sarthe", numero: "72" }, { nom: "Savoie", numero: "73" },
    { nom: "Haute-Savoie", numero: "74" }, { nom: "Paris", numero: "75" },
    { nom: "Seine-Maritime", numero: "76" }, { nom: "Seine-et-Marne", numero: "77" },
    { nom: "Yvelines", numero: "78" }, { nom: "Deux-Sèvres", numero: "79" },
    { nom: "Somme", numero: "80" }, { nom: "Tarn", numero: "81" },
    { nom: "Tarn-et-Garonne", numero: "82" }, { nom: "Var", numero: "83" },
    { nom: "Vaucluse", numero: "84" }, { nom: "Vendée", numero: "85" },
    { nom: "Vienne", numero: "86" }, { nom: "Haute-Vienne", numero: "87" },
    { nom: "Vosges", numero: "88" }, { nom: "Yonne", numero: "89" },
    { nom: "Territoire de Belfort", numero: "90" }, { nom: "Essonne", numero: "91" },
    { nom: "Hauts-de-Seine", numero: "92" }, { nom: "Seine-Saint-Denis", numero: "93" },
    { nom: "Val-de-Marne", numero: "94" }, { nom: "Val-d'Oise", numero: "95" },
    { nom: "Guadeloupe", numero: "971" }, { nom: "Martinique", numero: "972" },
    { nom: "Guyane", numero: "973" }, { nom: "La Réunion", numero: "974" },
    { nom: "Mayotte", numero: "976" }
];

// DOM Elements
const modeBtns = document.querySelectorAll('.mode-btn');
const quizSection = document.getElementById('quiz-section');
const modeBanner = document.getElementById('mode-banner');
const questionBox = document.getElementById('question');
const answerBtns = document.querySelectorAll('.answer-btn');
const timerDisplay = document.getElementById('timer');
const timerFill = document.getElementById('timer-fill');
const qTimerDisplay = document.getElementById('question-timer');
const qTimerFill = document.getElementById('question-timer-fill');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const resultSection = document.getElementById('result-section');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

let score=0, timeLeft=20, qTime=3, lives=5;
let timerInterval=null, qTimerInterval=null;
let currentMode=1, awaitingNext=false;
let correctAnswer='';

// START MODE
modeBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        currentMode = parseInt(btn.dataset.mode);
        startMode();
    });
});

function startMode(){
    score=0; lives=5; timeLeft=20; awaitingNext=false;
    scoreDisplay.textContent=score;
    updateLives();
    modeBanner.classList.add('hidden');
    quizSection.classList.remove('hidden');
    generateQuestion();
    startMainTimer();
}

// GENERATE QUESTION
function generateQuestion(){
    if(awaitingNext) return;
    qTime=3; qTimerDisplay.textContent=qTime; qTimerFill.style.width='100%';
    const dep = departements[Math.floor(Math.random()*departements.length)];
    let questionText = currentMode===1? dep.nom : dep.numero;
    correctAnswer = currentMode===1? dep.numero : dep.nom;
    questionBox.textContent=questionText;

    let wrongAnswers = departements.filter(d=>(currentMode===1? d.numero:d.nom)!==correctAnswer)
                        .sort(()=>Math.random()-0.5).slice(0,4)
                        .map(d=>currentMode===1? d.numero:d.nom);
    let options=[...wrongAnswers,correctAnswer].sort(()=>Math.random()-0.5);

    answerBtns.forEach((btn,i)=>{
        btn.textContent=options[i];
        btn.disabled=false;
        btn.classList.remove('correct','incorrect');
        btn.onclick = ()=> handleAnswer(options[i]);
    });

    startQTimer();
}

// HANDLE ANSWER
function handleAnswer(selected){
    if(awaitingNext) return;
    awaitingNext=true;
    clearInterval(qTimerInterval);
    answerBtns.forEach(btn=>{
        btn.disabled=true;
        if(btn.textContent===correctAnswer) btn.classList.add('correct');
        if(btn.textContent===selected && selected!==correctAnswer) btn.classList.add('incorrect');
    });
    if(selected===correctAnswer) score++;
    else lives--;
    updateLives();

    setTimeout(()=>{
        awaitingNext=false;
        if(lives<=0) endGame();
        else generateQuestion();
    },800);
}

// UPDATE LIVES DISPLAY
function updateLives(){
    livesDisplay.textContent='❤'.repeat(lives)+'♡'.repeat(5-lives);
}

// MAIN TIMER
function startMainTimer(){
    timerDisplay.textContent=timeLeft;
    timerFill.style.width='100%';
    clearInterval(timerInterval);
    timerInterval=setInterval(()=>{
        timeLeft--;
        timerDisplay.textContent=timeLeft;
        timerFill.style.width=(timeLeft/20*100)+'%';
        if(timeLeft<=5) timerFill.style.background='#dc3545';
        else if(timeLeft<=10) timerFill.style.background='#ffa500';
        else timerFill.style.background='#28a745';
        if(timeLeft<=0) { clearInterval(timerInterval); endGame();}
    },1000);
}

// QUESTION TIMER
function startQTimer(){
    qTimerDisplay.textContent=qTime;
    qTimerFill.style.width='100%';
    clearInterval(qTimerInterval);
    qTimerInterval=setInterval(()=>{
        qTime-=0.1;
        qTimerDisplay.textContent=Math.ceil(qTime);
        qTimerFill.style.width=(qTime/3*100)+'%';
        if(qTime<=0){
            clearInterval(qTimerInterval);
            lives--;
            updateLives();
            handleAnswer(''); // force mauvais
        }
    },100);
}

// END GAME
function endGame(){
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    finalScore.textContent=score;
    clearInterval(timerInterval);
    clearInterval(qTimerInterval);
}

// RESTART & HOME
restartBtn.onclick = startMode;
homeBtn.onclick = ()=>{
    resultSection.classList.add('hidden');
    modeBanner.classList.remove('hidden');
    timeLeft=20; lives=5;
};
