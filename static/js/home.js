document.addEventListener('DOMContentLoaded', () => {
    // Typed.js initialization
    const typed = new Typed('#typed-text', {
        strings: [
            'Data Analyst',
            'Data Scientist',
            'Data Visualization Expert',
            'Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Animate counter numbers
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + '+';
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + '+';
            }
        };

        counter.setAttribute('data-target', counter.innerText.replace('+', ''));
        updateCount();
    });
});