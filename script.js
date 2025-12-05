
    
        // Mobile navigation
        const btnNavEl = document.querySelector(".btn-mobile-nav");
        const headerEl = document.querySelector(".header");

        btnNavEl.addEventListener("click", function () {
            headerEl.classList.toggle("nav-open");
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                if (this.getAttribute('href') !== '#') {
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile navigation
                if (this.classList.contains('main-nav-link')) {
                    headerEl.classList.toggle("nav-open");
                }
            });
        });

        // Sticky navigation
        const sectionHeroEl = document.querySelector(".section-hero");

        const obs = new IntersectionObserver(
            function (entries) {
                const ent = entries[0];
                console.log(ent);

                if (ent.isIntersecting === false) {
                    document.body.classList.add("sticky");
                }

                if (ent.isIntersecting === true) {
                    document.body.classList.remove("sticky");
                }
            },
            {
                // In the viewport
                root: null,
                threshold: 0,
                rootMargin: "-80px",
            }
        );
        obs.observe(sectionHeroEl);

        // Form submission
        const form = document.querySelector('.cta-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in Omnifood! We will be in touch soon.');
            form.reset();
        });