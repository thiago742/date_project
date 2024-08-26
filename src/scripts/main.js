document.getElementById('startCountdown').addEventListener('click', function() {
    const dataNascimentoInput = document.getElementById('dataNascimento').value;
    const dataNascimento = new Date(dataNascimentoInput);
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = dataNascimento - now;

        if (diff <= 0) {
            countdownElement.innerHTML = "A data chegou!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});
