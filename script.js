document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        navUl.classList.remove('show');
        overlay.classList.remove('show');
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
            overlay.classList.remove('show');
        });
    });

    // Stopky
    let startTime, interval;
    const cas = document.getElementById('cas');
    const stopButton = document.getElementById('stop');
    const kopirovatButton = document.getElementById('kopirovat');

    function startStopky() {
        startTime = new Date();
        interval = setInterval(() => {
            const elapsedTime = new Date() - startTime;
            const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            cas.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }, 1000);
    }

    function pad(number) {
        return number < 10 ? `0${number}` : number;
    }

    function stopStopky() {
        clearInterval(interval);
    }

    function kopirovatCas() {
        const textArea = document.createElement('textarea');
        textArea.value = cas.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Čas bol skopírovaný');
    }

    stopButton.addEventListener('click', stopStopky);
    kopirovatButton.addEventListener('click', kopirovatCas);

    startStopky();
});
