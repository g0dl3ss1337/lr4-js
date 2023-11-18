function confirmNavigation() {
    const result = confirm("Ви впевнені що хочете перейти на іншу сторінку?");
    if (!result) {
        event.preventDefault(); // Забороняє перехід далі
    }
}

function validateSearch() {
    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput.value.trim() === '') {
        alert('Будь ласка, введіть пошуковий запит.');
        return false; // Забороняє перехід далі
    }
    return true; // Дозволяє перехід далі
}
