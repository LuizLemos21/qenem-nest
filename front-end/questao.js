document.addEventListener('DOMContentLoaded', function() {
    const questionDetails = document.getElementById('questionDetails');
    const errorMessage = document.getElementById('errorMessage');
    const urlParams = new URLSearchParams(window.location.search);
    const questionId = urlParams.get('id');
  
    if (questionId) {
      fetch(`http://localhost:3000/api/questions/${questionId}`)
        .then(response => response.json())
        .then(question => {
          displayQuestionDetails(question);
        })
        .catch(error => {
          errorMessage.textContent = 'Failed to fetch question details';
        });
    } else {
      errorMessage.textContent = 'No question ID provided';
    }
  
    function displayQuestionDetails(question) {
      questionDetails.innerHTML = `
        <h2>${question.title}</h2>
        <p>${question.content}</p>
        <p><strong>Disciplina:</strong> ${question.subject.name}</p>
        <p><strong>Ano:</strong> ${question.enem.year}</p>
        <p><strong>Dificuldade:</strong> ${question.difficulty}</p>
        <p><strong>Alternativas:</strong></p>
        <ul>
          <li>A: ${question.alternativaA}</li>
          <li>B: ${question.alternativaB}</li>
          <li>C: ${question.alternativaC}</li>
          <li>D: ${question.alternativaD}</li>
          <li>E: ${question.alternativaE}</li>
        </ul>
        <p><strong>Resposta Correta:</strong> ${question.correctAnswer}</p>
        <p><strong>Explicação:</strong> ${question.explanation}</p>
      `;
    }
  });
  