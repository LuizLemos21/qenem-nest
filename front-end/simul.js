document.addEventListener('DOMContentLoaded', function() {
    const simulationForm = document.getElementById('simulationForm');
    const simulationDetails = document.getElementById('simulationDetails');
    const errorMessage = document.getElementById('errorMessage');
  
    // Fetch and populate subjects
    fetch('http://localhost:3000/api/subjects')
      .then(response => response.json())
      .then(subjects => {
        const subjectSelect = document.getElementById('subject_id');
        subjects.forEach(subject => {
          const option = document.createElement('option');
          option.value = subject.id;
          option.textContent = subject.name;
          subjectSelect.appendChild(option);
        });
      });
  
    simulationForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const subjectId = simulationForm.subject_id.value;
      const difficulty = simulationForm.difficulty.value;
      const quantity = simulationForm.quantity.value;
  
      try {
        const response = await fetch(`http://localhost:3000/api/questions?subject_id=${subjectId}&difficulty=${difficulty}&quantity=${quantity}`);
        if (response.ok) {
          const questions = await response.json();
          startSimulation(questions);
        } else {
          throw new Error('Failed to fetch questions');
        }
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    });
  
    function startSimulation(questions) {
      simulationDetails.innerHTML = '';
      questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
          <h3>Questão ${index + 1}</h3>
          <p>${question.content}</p>
          <form id="questionForm${index}">
            <input type="radio" name="answer" value="A"> ${question.alternativaA}<br>
            <input type="radio" name="answer" value="B"> ${question.alternativaB}<br>
            <input type="radio" name="answer" value="C"> ${question.alternativaC}<br>
            <input type="radio" name="answer" value="D"> ${question.alternativaD}<br>
            <input type="radio" name="answer" value="E"> ${question.alternativaE}<br>
          </form>
        `;
        simulationDetails.appendChild(questionDiv);
      });
  
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Submit Simulation';
      submitButton.addEventListener('click', submitSimulation.bind(null, questions));
      simulationDetails.appendChild(submitButton);
    }
  
    async function submitSimulation(questions) {
      const answers = questions.map((question, index) => {
        const form = document.getElementById(`questionForm${index}`);
        const selectedAnswer = form.querySelector('input[name="answer"]:checked');
        return {
          questionId: question.id,
          selectedAnswer: selectedAnswer ? selectedAnswer.value : null,
        };
      });
  
      const userId = 1; // Replace with actual user ID from session or context
      const subjectId = simulationForm.subject_id.value;
      const difficulty = simulationForm.difficulty.value;
  
      try {
        const response = await fetch(`http://localhost:3000/api/simulations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            subjectId,
            difficulty,
            answers,
          }),
        });
  
        if (response.ok) {
          const result = await response.json();
          displaySimulationResult(result);
        } else {
          throw new Error('Failed to submit simulation');
        }
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    }
  
    function displaySimulationResult(result) {
      simulationDetails.innerHTML = `
        <h2>Simulation Results</h2>
        <p>Score: ${result.score}</p>
        <p>Correct Answers: ${result.correctAnswers}</p>
        <p>Incorrect Answers: ${result.incorrectAnswers}</p>
      `;
    }
  });
  