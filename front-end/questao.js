document.addEventListener('DOMContentLoaded', async function() {
  const urlParams = new URLSearchParams(window.location.search);
  const questionId = urlParams.get('id');
  const questionDetail = document.getElementById('questionDetail');

  try {
    const response = await fetch(`http://localhost:3001/questions/${questionId}`);
    if (response.ok) {
      const question = await response.json();
      displayQuestion(question);
    } else {
      throw new Error('Failed to fetch question details');
    }
  } catch (error) {
    console.error(error.message);
  }

  function displayQuestion(question) {
    questionDetail.innerHTML = `
      <h2>${question.title}</h2>
      <p>${question.content}</p>
      <p><strong>Dificuldade:</strong> ${question.difficulty}</p>
      <p><strong>Disciplina:</strong> ${question.subject.name}</p>
      <p><strong>Ano do ENEM:</strong> ${question.enem.year}</p>
      <p><strong>Alternativa A:</strong> ${question.alternativaA}</p>
      <p><strong>Alternativa B:</strong> ${question.alternativaB}</p>
      <p><strong>Alternativa C:</strong> ${question.alternativaC}</p>
      <p><strong>Alternativa D:</strong> ${question.alternativaD}</p>
      <p><strong>Alternativa E:</strong> ${question.alternativaE}</p>
      <p><strong>Resposta Correta:</strong> ${question.correctAnswer}</p>
      <p><strong>Texto Resposta:</strong> ${question.textoResposta}</p>
    `;
  }
});
