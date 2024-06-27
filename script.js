document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[action="https://api.web3forms.com/submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate name, email, and message fields
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // If all fields are filled, submit the form
        this.submit();
    });
});
