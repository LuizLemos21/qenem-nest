document.addEventListener('DOMContentLoaded', async function() {
    const questionContent = document.getElementById('questionContent');
    const answerForm = document.getElementById('answerForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const queryParams = new URLSearchParams(window.location.search);
    const questionId = queryParams.get('id');

    try {
        const response = await fetch(`http://localhost:3001/questions/${questionId}`);
        if (response.ok) {
            const question = await response.json();
            questionContent.innerHTML = `
                <p>${question.content}</p>
                <p><strong>A:</strong> ${question.alternativaA}</p>
                <p><strong>B:</strong> ${question.alternativaB}</p>
                <p><strong>C:</strong> ${question.alternativaC}</p>
                <p><strong>D:</strong> ${question.alternativaD}</p>
                <p><strong>E:</strong> ${question.alternativaE}</p>
            `;

            answerForm.addEventListener('submit', async function(event) {
                event.preventDefault();
                const userAnswer = answerForm.answer.value;

                if (userAnswer === question.correctAnswer) {
                    feedbackMessage.textContent = 'Resposta correta!';
                    feedbackMessage.style.color = 'green';
                } else {
                    feedbackMessage.textContent = 'Resposta incorreta. Tente novamente.';
                    feedbackMessage.style.color = 'red';
                }
            });
        } else {
            throw new Error('Failed to fetch question');
        }
    } catch (error) {
        feedbackMessage.textContent = error.message;
        feedbackMessage.style.color = 'red';
    }
});
