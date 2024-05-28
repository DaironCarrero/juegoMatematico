const questions = [
    {
      question: "Si 4 máquinas pueden producir 1000 piezas en 8 horas, ¿cuántas horas necesitarán 6 máquinas para producir 1500 piezas?",
      answers: [
        {text: "5 horas", correct: false},
        {text: "6 horas", correct: true},
        {text: "10 horas", correct: false},
        {text: "12 horas", correct: false}
      ],
      
    },
    {
      question: "Si 5 obreros construyen un muro en 10 días, ¿en cuántos días construirán el mismo muro 8 obreros?",
      answers: [
        {text: "4 días", correct: true},
        {text: "5 días", correct: false},
        {text: "6 días", correct: false},
        {text: "8 días", correct: false},
      ],
      
    },
    {
      question: "Si un automóvil recorre 300 km con 20 litros de gasolina, ¿cuántos litros necesitará para recorrer 450 km? ",
      answers: [
        {text: "25 litros", correct: false},
        {text: "30 litros", correct: true},
        {text: "35 litros", correct: false},
        {text: "40 litros", correct: false},
      ],
      
    },
    {
      question: "Si un paquete de harina cuesta $2 y se necesitan 3 paquetes para hacer una torta, ¿cuánto costará la harina para hacer 5 tortas? ",
      answers: [
        {text: "$8", correct: false},
        {text: "$10", correct: false},
        {text:"$12", correct: false},
        {text:  "$15", correct: true},
      ],

    },
    {
      question: "Si un tren recorre una distancia de 300 km en 4 horas, ¿a qué velocidad promedio está viajando?",
      answers: [
        {text: "60 km/h", correct: true},
        {text: "75 km/h", correct: false},
        {text: "80 km/h", correct: false},
        {text: "90 km/h", correct: false},
       ],
      
    },
    {
      question: "Si un trabajador completa una tarea en 6 horas trabajando solo, ¿en cuántas horas la completarán dos trabajadores si trabajan juntos?",
      answers: [
        {text: "2 horas", correct: false},
        {text: "4 horas", correct: false},
        {text: "3 horas", correct: true},
        {text: "5 horas", correct: false},
      ],
      
    },
    {
      question: "¿Cuál es el área de un rectángulo con base de 5 cm y altura de 8 cm?", 
      answers: [
        {text: "13 cm²", correct: false},
        {text: "30 cm²", correct: true},
        {text: "40 cm²", correct: false},
        {text: "56 cm²", correct: false},
      ],
      
    }
  ];
  
  var currentQuestion = 0;
let posActual = 0;
function comenzarJuego(){
	posActual = 0;
	respuestasCorrectas = 0;
	document.getElementById("pantallaInicial").style.display ="none";
	document.getElementById("game-container").style.display ="block";
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
  document.getElementById("game-container").style.display ="none";
	document.getElementById("endScreen").innerHTML = "¡Felicidades! Has terminado el juego. Has obtenido " + respuestasCorrectas;
	document.getElementById("end").style.display ="block";
	
    
}

	
