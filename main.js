function changeScreenTime(){
    setTimeout(function (){
        document.getElementById("splash_Screen").style.display = "none";
        document.getElementById("main_Screen").style.display = "inline-block";
    }, 5000);
}

var questionNumber = 0;
var score = 0;
var isCorrect = "false";

var QuizContent;   

const techno_QuizContent = [
    {
        question: "What is the full form of A.I?",
        a: "Astronomical Intelligence",
        b: "Artificial Intellignece",
        c: "Artificial Internet",
        d: "Astronomical Internet",
        correct: "Artificial Intellignece"
    },
    {
        question: "Who is the founder of the World Wide Web?",
        a: "Elon Musk",
        b: "Bill Gates",
        c: "Tim Berners-Lee",
        d: "Jeff Bezos",
        correct: "Tim Berners-Lee"
    },
    {
        question: "What does HTML stands for?",
        a: "Hyper Text Markup Lane",
        b: "Hyper Time Markup Light",
        c: "Hydra Text Makeup Language",
        d: "Hyper Text Markup Language",
        correct: "Hyper Text Markup Language"
    },
    {
        question: "What is the brain of the computer called?",
        a: "Random Access Memory (RAM)",
        b: "Read Only Memory (ROM)",
        c: "Central Processing Unit (CPU)",
        d: "Hard Drive",
        correct: "Central Processing Unit (CPU)"
    },
    {
        question: "How many computer languages are in use?",
        a: "2000",
        b: "5000",
        c: "50",
        d: "20",
        correct: "2000"
    },
    {
        question: "Which of these is not an early computer?",
        a: "ENIAC",
        b: "UNIVAC",
        c: "NASA",
        d: "SAGE",
        correct: "NASA"
    },
    {
        question: "Who founded Apple Computer?",
        a: "Stephen Fry",
        b: "Bill Gates",
        c: "Steve Jobs",
        d: "Stephen Hawking",
        correct: "Steve Jobs"
    },
    {
        question: "Which of these is not a peripheral, in computer terms?",
        a: "Keyboard",
        b: "Monitor",
        c: "Mouse",
        d: "Motherboard",
        correct: "Motherboard"
    },
    {
        question: "What does the Internet prefix WWW stand for?",
        a: "Wide Width Wickets",
        b: "World Wide Web",
        c: "Worldwide Weather",
        d: "Western Washington World",
        correct: "World Wide Web"
    },
    {
        question: "Which of these is not a kind of computer?",
        a: "Apple",
        b: "Lenovo",
        c: "Toshiba",
        d: "Lada",
        correct: "Lada"
    }
];

const science_QuizContent = [
    {
        question: "What does DNA stand for?",
        a: "Deoxyribonucleic Acid",
        b: "Deoxygenated Acid",
        c: "Deoxynucleic Acid",
        d: "Deoxoribonuclear Acid",
        correct: "Deoxyribonucleic Acid"
    },
    {
        question: "How many bones are in the human body?",
        a: "200",
        b: "150",
        c: "206",
        d: "207",
        correct: "206"
    },
    {
        question: "The concept of gravity was discovered by which famous physicist?",
        a: "Stephen Hawkings",
        b: "Galileo Galilei",
        c: "Albert Einstien",
        d: "Sir Isaac Newton",
        correct: "Sir Isaac Newton"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Aluminium",
        b: "Diamond",
        c: "Iron",
        d: "Platinum",
        correct: "Diamond"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Argon",
        correct: "Nitrogen"
    },
    {
        question: "At what temperature are Celsius and Fahrenheit equal?",
        a: "-40 Degrees",
        b: "1 Degree",
        c: "100 Degrees",
        d: "-20 Degrees",
        correct: "-40 Degrees"  
    },
    {
        question: "Which is the biggest planet in our solar system?",
        a: "Saturn",
        b: "Uranus",
        c: "Jupiter",
        d: "Earth",
        correct: "Jupiter"
    },
    {
        question: "Which Apollo moon mission was the first to carry a lunar rover?",
        a: "Apollo 1",
        b: "International Space Station",
        c: "Artemis Program",
        d: "Apollo 15",
        correct: "Apollo 15"
    },
    {
        question: "How many teeth does an adult human have?",
        a: "22",
        b: "16",
        c: "32",
        d: "30",
        correct: "32"
    },
    {
        question: "What is the study of mushrooms called?",
        a: "Mycology",
        b: "Psychology",
        c: "Anthropology",
        d: "Botany",
        correct: "Mycology"
    }
];

const eng_QuizContent = [
    {
        question: "The friction experienced by a body, when in motion, is known as",
        a: "Rolling Friction",
        b: "Dynamic Friction",
        c: "Limiting Friction",
        d: "Static Friction",
        correct: "Dynamic Friction" 
    },
    {
        question: "A cycle consisting of one constant pressure, one constant volume and two isentropic processes is known as",
        a: "Carnot Cycle",
        b: "Stirling Cycle",
        c: "Otto Cycle",
        d: "Diesel Cycle",
        correct: "Diesel Cycle"
    },
    {
        question: "The efficiency and work ratio of a simple gas turbine cycle are",
        a: "Low",
        b: "Very Low",
        c: "High",
        d: "Very High",
        correct: "Very Low"
    },
    {
        question: "Materials with lots of free electrons are called",
        a: "Conductors",
        b: "Insulators",
        c: "Semiconductors",
        d: "Filters",
        correct: "Conductors"
    },
    {
        question: "What is the unit of electrical charge called?",
        a: "Coulomb",
        b: "Joule",
        c: "Volt",
        d: "Watt",
        correct: "Coulomb"
    },
    {
        question: "Which of the following is not a type of energy source?",
        a: "Generator",
        b: "Rheostat",
        c: "Solar cell",
        d: "Battery",
        correct: "Rheostat"
    },
    {
        question: "What is the unit for reluctance?",
        a: "Tesla",
        b: "At/Wb",
        c: "At/m",
        d: "Wb",
        correct: "At/Wb"
    },
    {
        question: "What is the direction of a magnetic field within a magnet?",
        a: "From south to north",
        b: "From north to south",
        c: "Back to front",
        d: "Front to back",
        correct: "From south to north"
    },
    {
        question: "What is the ability of a material to remain magnetized after removal of the magnetizing force?",
        a: "Permeability",
        b: "Reluctance",
        c: "Hysteresis",
        d: "Retentivity",
        correct: "Retentivity"
    },
    {
        question: "Tin based white metals are used, where bearings are subjected to",
        a: "High pressure and load.",
        b: "Low pressure and load.",
        c: "High temperature.",
        d: "Large surface wear.",
        correct: "High pressure and load."
    }
];

const math_QuizContent = [
    {
        question: "Whats the value of π(Pie)?",
        a: "22/8",
        b: "25/7",
        c: "22/7", 
        d: "30/7",
        correct: "22/7"
    },
    {
        question: "What is the formula for the area of the circle?",
        a: "πr^2",
        b: "2πr",
        c: "πr^3",
        d: "2πd",
        correct: "πr^2"
    },
    {
        question: "How many conditions are there for the congruency of triangles?",
        a: "3",
        b: "1",
        c: "5",
        d: "4",
        correct: "5"
    },
    {
        question: "When 75% of a number is added to 75, then resultant number is the original number. The number is :",
        a: "150",
        b: "300",
        c: "100",
        d: "45",
        correct: "300"
    },
    {
        question: "The diagonals do not necessarily bisect the interior angles at the vertices in a :",
        a: "Rectangle",
        b: "Square",
        c: "Rhombus",
        d: "None of these",
        correct: "Rectangle"
    },
    {
        question: "The measure of each exterior angle of a 10 sides regular polygon is : ",
        a: "36",
        b: "30",
        c: "18",
        d: "35",
        correct: "36"
    },
    {
        question: "Find the cube root of 343",
        a: "6",
        b: "7",
        c: "5",
        d: "4",
        correct: "7"
    },
    {
        question: "What is the sum of all angles of a hexagon?",
        a: "180 Degrees",
        b: "360 Degrees",
        c: "540 Degrees",
        d: "720 Degrees",
        correct: "720 Degrees"
    },
    {
        question: "If 1/2 is subtracted from a number and the difference is multiplied by 4, the result is 5. What is the number ?",
        a: "8/9",
        b: "7/4",
        c: "6/4",
        d: "1/3",
        correct: "7/4"
    },
    {
        question: "Which of the following does not lie on y-axis?",
        a: "(0, 5)",
        b: "(0, -2)",
        c: "(-3, 0)",
        d: "(0, 7)",
        correct: "(-3, 0)"
    }
];

function techno_Clicked(){
    document.getElementById("main_Screen").style.display = "none";
    document.getElementById("Quiz_Screen").style.display = "inline-block";

    document.getElementById("quizTitle").innerHTML = "Technology";
    document.getElementById("Title").innerHTML = "Technology Quiz";
    QuizContent = techno_QuizContent;
}

function science_Clicked(){
    document.getElementById("main_Screen").style.display = "none";
    document.getElementById("Quiz_Screen").style.display = "inline-block";

    document.getElementById("quizTitle").innerHTML = "Science";
    document.getElementById("Title").innerHTML = "Science Quiz";
    QuizContent = science_QuizContent;
}

function eng_Clicked(){
    document.getElementById("main_Screen").style.display = "none";
    document.getElementById("Quiz_Screen").style.display = "inline-block";

    document.getElementById("quizTitle").innerHTML = "Engeenring";
    document.getElementById("Title").innerHTML = "Engeenring Quiz";
    QuizContent = eng_QuizContent;
}

function math_Clicked(){
    document.getElementById("main_Screen").style.display = "none";
    document.getElementById("Quiz_Screen").style.display = "inline-block";

    document.getElementById("quizTitle").innerHTML = "Maths";
    document.getElementById("Title").innerHTML = "Maths Quiz";
    QuizContent = math_QuizContent;
}

function Quiz_Start(){
    document.getElementById("Quiz_Screen").style.display = "none";
    document.getElementById("Quiz_Start").style.display = "inline-block";
    document.getElementById("Quiz_Start").style.paddingBottom = "41px";
    document.getElementById("QuizOn").style.display = "inline-block";   
    questionNumber = 0;
    score = 0;
    isCorrect = "false";
    document.getElementById('TimeLeft_Lbl').innerHTML = 02 + ":" + 01;
    loadQuestion();
    timing.myfunction();
}

function Back(){
    document.getElementById("main_Screen").style.display = "inline-block";
    document.getElementById("Quiz_Screen").style.display = "none";
}

const timing = {
    myfunction: function (){
        startTimer();

        function startTimer() {
            var presentTime = document.getElementById('TimeLeft_Lbl').innerHTML;
            var timeArray = presentTime.split(/[:]+/);

            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1));

            if(s==59){
                m=m-1
            };
            if(m<0){
                return;
            }
            
            document.getElementById('TimeLeft_Lbl').innerHTML = m + ":" + s;
            console.log(m)
            setTimeout(startTimer, 1000);
            
            if((m == 0) && (s == 0)){
                endTime();
            }
        }

        function checkSecond(sec) {
            if (sec < 10 && sec >= 0) {
                sec = "0" + sec
            };
            if (sec < 0) {
                sec = "59"
            };
            return sec;
        }
    }
}

function endTime(){
    document.getElementById("QuizOn").style.display = "none";
    document.getElementById("endScreen").style.display = "inline-block";
    document.getElementById("QuizResult").innerHTML = "You got " + score + " out of 10.";
    document.getElementById("QuizResultInPercent").innerHTML = (score / 10) * 100 + "%";
    timing.myfunction = function(){};
    document.getElementById("Quiz_Start").style.paddingBottom = "0px";
}

var Quiz;

function loadQuestion(){
    Quiz = QuizContent[questionNumber];

    document.getElementById("Question").innerHTML = Quiz.question;
    document.getElementById("op1").innerHTML = Quiz.a;
    document.getElementById("op2").innerHTML = Quiz.b;
    document.getElementById("op3").innerHTML = Quiz.c;
    document.getElementById("op4").innerHTML = Quiz.d;
}

function submitAnswer(){
    questionNumber += 1;
    console.log(questionNumber);
    if(isCorrect == "true"){
        score += 1;
        console.log("Score: " + score);
        isCorrect = "false";
    }
    loadQuestion();
}

function option_Clicked(){
    Quiz = QuizContent[questionNumber];

    document.getElementById("op1").addEventListener('click', check)
    document.getElementById("op2").addEventListener('click', check)
    document.getElementById("op3").addEventListener('click', check)
    document.getElementById("op4").addEventListener('click', check)

    function check(){
        var optionCheck = this.innerHTML;
        if(optionCheck == Quiz.correct){
            isCorrect = "true";
            console.log("Correct: " + isCorrect);
        }
        else{
            isCorrect = "false";
            console.log("Correct: " + isCorrect);
            console.log("Score: " + score);
        }
    }
}

function endQuiz(){
    document.getElementById("QuizOn").style.display = "none";
    document.getElementById("endScreen").style.display = "inline-block";
    document.getElementById("QuizResult").innerHTML = "You got " + score + " out of 10.";
    document.getElementById("QuizResultInPercent").innerHTML = (score / 10) * 100 + "%";
    timing.myfunction = function(){};
    document.getElementById("Quiz_Start").style.paddingBottom = "0px";
}

function BackEnd(){ 
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("main_Screen").style.display = "inline-block";

    if(QuizContent == techno_QuizContent){
        document.getElementById("techno_EnterBtn").style.display = "none";
    }
    if(QuizContent == science_QuizContent){
        document.getElementById("science_EnterBtn").style.display = "none";
    }
    if(QuizContent == eng_QuizContent){
        document.getElementById("eng_EnterBtn").style.display = "none";
    }
    if(QuizContent == math_QuizContent){
        document.getElementById("math_EnterBtn").style.display = "none";
    }
}