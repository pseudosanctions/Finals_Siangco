// Dropdown nav for mobile with animation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');

    if (navToggle && navUl) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('open');
            navUl.classList.toggle('open');
        });

        // Close on link click (optional for single-page/anchor nav)
        navUl.querySelectorAll('a').forEach(link =>
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navUl.classList.remove('open');
            })
        );
    }
});