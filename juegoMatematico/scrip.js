var questions = [
	{
		question: "¿Cuántos milímetros hay en un metro?",
		answers: [
			{ text: "Hay 500 milímetros en un metro", correct: false },
			{ text: "Hay 1000 milímetros en un  metro", correct: true },
			{ text: "Hay 750 milímetros en un solo metro", correct: false }
		]
	},
	{
		question: "Cuanto es 2 + 2?",
		answers: [
			{ text: "4", correct: true },
			{ text: "5", correct: false },
			{ text: "6", correct: false }
		]
	},
	{
		question: "Cuanto es 5 x 3?",
		answers: [
			{ text: "20", correct: false },
			{ text: "15", correct: true },
			{ text: "25", correct: false }
		]
	},
	
	
	{
		question: "¿Cuál es el perímetro de un pentàgono de longitud 3 unidades?",
		answers: [
			{ text: "6 ", correct: false },
			{ text: "15", correct: true },
			{ text: "17.6", correct: false }
		]
	},
	{
		question: "Cuanto es 10 / 2?",
		answers: [
			{ text: "5", correct: true },
			{ text: "6", correct: false },
			{ text: "7", correct: false }
		]
	},
	{
		question: "¿Qué unidad es una centésima de metro?",
		answers: [
			{ text: "Milímetro", correct: false },
			{ text: "Centímetro", correct: true },
			{ text: "Decámetro", correct: false }
		]
	},
	{
		question: "¿Cuál es el perímetro de un cuadrado con lado de 5 unidades?",
		answers: [
			{ text: "25 unidades", correct: false },
			{ text: "30 unidades", correct: false },
			{ text: "20 unidades", correct: true }
		]
	},
	{
		question: "¿Cuál es el perímetro de un triángulo equilátero con lado de 7 unidades?",
		answers: [
			{ text: "20 unidades", correct: false },
			{ text: "21 unidades", correct: true },
			{ text: "25 unidades", correct: false }
		]
	},
];

var currentQuestion = 0;
let posActual = 0;
function comenzarJuego(){
	posActual = 0;
	respuestasCorrectas = 0;
	document.getElementById("pantallaInicial").style.display ="none";
	document.getElementById("container").style.display ="block";
}

function loadQuestion() {
	var questionElement = document.getElementById("question");
	questionElement.textContent = questions[currentQuestion].question;

	var answersElement = document.getElementById("answers");
	answersElement.innerHTML = "";

	questions[currentQuestion].answers.forEach(function(answer) {
		var radio = document.createElement("input");
		radio.type = "radio";
		radio.name = "answer";
		radio.value = answer.text;
		radio.id = "answer" + answer.text;

		var label = document.createElement("label");
		label.htmlFor = radio.id;
		label.textContent = answer.text;

		answersElement.appendChild(radio);
		answersElement.appendChild(label);
		answersElement.appendChild(document.createElement("br"));
	});
}

let respuestasCorrectas = 0;
let respuestaVerificada = false; 

function checkAnswer() {
	var answerElement = document.querySelector('input[name="answer"]:checked');
	var resultElement = document.getElementById("result");

	if (answerElement && answerElement.value == questions[currentQuestion].answers.find(function(a) { return a.correct; }).text) {
		resultElement.textContent = "Correct!";
	} else {
		resultElement.textContent = "Incorrect. Try again.";
	}
	
  const resultado = document.getElementById("result");


  const timeToRemove = 100;
  
  setTimeout(() => {
	resultado.style.display = "block";
  }, timeToRemove);
  let myBotton = document.getElementById("nextQuestions")
  myBotton.addEventListener("click", () => {
  if (resultado.style.display === "none") {
	resultElement.textContent = "";
    resultado.style.display = "block";
  } else {
    resultado.style.display = "none";
  }
   });

  
	if (resultElement.textContent == "Correct!"  ) {
	  respuestasCorrectas++;
	} 
  
	
	let result = respuestasCorrectas;
	document.getElementById("correctas").innerHTML = "Respuestas correctas: " + result;

	
};
    
   




function nextQuestion() {
	currentQuestion++;
	if (currentQuestion < questions.length) {
		loadQuestion();
	} else {
		endJuego();


	}
		
}
	
	


loadQuestion();



function endJuego(){
	let endScreen = document.getElementById("endScreen");
	endScreen.style.display = "block";
     
	document.getElementById("container").style.display ="none";
	document.getElementById("endScreen").innerHTML = "¡Felicidades! Has terminado el nivel 1. Has obtenido " + respuestasCorrectas;
	document.getElementById("end").style.display ="block";
	
    
}

	
