function checkAnswers() {
    const answers = [
        document.getElementById('answer1').value,
        document.getElementById('answer2').value,
        document.getElementById('answer3').value,
        document.getElementById('answer4').value
    ];

    const correctAnswers = ["4", "15", "6", "3"];
    let resultText = "";

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            resultText += `Задача ${i + 1}: Верно!<br>`;
        } else {
            resultText += `Задача ${i + 1}: Неверно. Правильный ответ: ${correctAnswers[i]}<br>`;
        }
    }

    document.getElementById('result').innerHTML = resultText;
}