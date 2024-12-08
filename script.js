function verifyAccess(age, password) {
    const correctPassword = "123456";

    if (age >= 18 && password === correctPassword) {
        return true;
    } else if (age >= 18 && password !== correctPassword) {
        return confirm('У вас есть разрешение на вход без правильного пароля?');
    } else {
        return confirm('Ваши родители разрешили?');
    }
}

let userInput = prompt('Введите ваш возраст:');
let age = parseInt(userInput, 10); // Преобразование строки в число

if (!userInput.trim() || isNaN(age)) {
    alert('Пожалуйста, введите корректный возраст.');
} else {
    let password = prompt('Введите пароль доступа:'); // Запрос пароля у пользователя
    let accessMessage = verifyAccess( password) ? 'Доступ разрешен' : 'Доступ запрещен';
    alert(accessMessage);
}