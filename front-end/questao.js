document.addEventListener('DOMContentLoaded', async function() {
  const questionContent = document.getElementById('questionContent');
  const answerForm = document.getElementById('answerForm');
  const errorMessage = document.getElementById('errorMessage');
  const queryParams = new URLSearchParams(window.location.search);
  const questionId = queryParams.get('id');

  try {
      const response = await fetch(`http://localhost:3001/questions/${questionId}`);
      if (response.ok) {
          const question = await response.json();
          questionContent.textContent = question.content;

          answerForm.addEventListener('submit', async function(event) {
              event.preventDefault();
              const userAnswer = answerForm.answer.value;

              if (userAnswer === question.correctAnswer) {
                  alert('Resposta correta!');
              } else {
                  alert('Resposta incorreta. Tente novamente.');
              }
          });
      } else {
          throw new Error('Failed to fetch question');
      }
  } catch (error) {
      errorMessage.textContent = error.message;
  }
});
