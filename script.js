document.addEventListener('DOMContentLoaded', function () {
    // Pricing Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const pricingCards = document.querySelectorAll('.pricing-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            pricingCards.forEach(card => card.classList.remove('show'));
            const tier = button.dataset.tab;
            document.querySelectorAll(`.pricing-card.${tier}`).forEach(card => {
                card.classList.add('show');
            });
        });
    });

    // Portfolio Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Replace with your email
    const yourEmail = "harshranjan7117@gmail.com";

    // For the Get Started buttons
    document.querySelectorAll('.pricing-card .cta-button').forEach(button => {
        button.addEventListener('click', function () {
            const plan = this.closest('.pricing-card').classList.contains('basic') ? 'Basic'
                : this.closest('.pricing-card').classList.contains('standard') ? 'Standard'
                    : 'Premium';
            const subject = encodeURIComponent(`Plan Inquiry - ${plan}`);
            const body = encodeURIComponent(`I would like to start with the ${plan} plan.`);
            const mailtoURL = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
            window.location.href = mailtoURL;
        });
    });

    // For the "Email Me Directly" button
    document.querySelector('.email-button').addEventListener('click', function (e) {
        e.preventDefault();
        const subject = encodeURIComponent("Freelance Inquiry");
        const body = encodeURIComponent("Discuss about your query/project/task to be completed.");
        const mailtoURL = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
        window.location.href = mailtoURL;
    });


    // Portfolio View Buttons
    // Replace the existing portfolio view buttons code with this:
    document.querySelectorAll('.portfolio-item .view-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            // Optional: Add analytics or tracking here
            const serviceName = this.closest('.portfolio-item').querySelector('h3').textContent;
            console.log(`User clicked on ${serviceName}`);

            // The link will naturally follow its href since we're not preventing default
        });
    });

    // Scroll Animations
    const animateOnScroll = () => {
        document.querySelectorAll('.service-card, .pricing-card, .portfolio-item').forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            if (elementPosition < window.innerHeight / 1.2) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animations
    document.querySelectorAll('.service-card, .pricing-card, .portfolio-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
