function confirmNavigation() {
    const result = confirm("Ви впевнені що хочете перейти на іншу сторінку?");
    if (!result) {
        event.preventDefault(); // Забороняє перехід далі
    }
}

function validateSearch() {
    const searchInputs = document.querySelectorAll('form input[type="text"]');
    for (const input of searchInputs) {
        if (input.value.trim() !== '') {
            return true; // Забороняє перехід далі якщо хочаб одне поле заповнене
        }
    }
    alert('Будь ласка, введіть пошуковий запит. ( Хочаб одне поле має бути заповнене. )');
    return false; // Дозволяє перехід далі
}