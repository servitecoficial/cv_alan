        // Simple scroll animation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Skill bar animation
        window.addEventListener('scroll', function () {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.5;
                if (barPosition < screenPosition) {
                    bar.style.width = bar.style.width;
                }
            });
        });