const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (event) {
    formatPhoneNumber(event.target);
});

function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    const ddd = value.substring(0, 2);
    const firstPart = value.substring(2, 6);
    const secondPart = value.substring(6, 11);

    let formattedNumber = '';

    if (ddd) {
        formattedNumber += `(${ddd}`;
    }
    if (firstPart) {
        formattedNumber += `) ${firstPart}`;
    }
    if (secondPart) {
        formattedNumber += `-${secondPart}`;
    }

    input.value = formattedNumber;
}
