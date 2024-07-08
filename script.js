document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer.getAttribute('data-answer') === 'correct') {
                alert('Correct!');
            } else {
                alert('Wrong answer, try again.');
            }
        });
    });
});
