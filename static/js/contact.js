// Form validation and submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    
    // Basic validation
    for (let key in formProps) {
        if (!formProps[key]) {
            alert(`Please fill in the ${key} field`);
            return;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formProps.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show success message
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        alert('Message sent successfully!');
        contactForm.reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }, 1500);
});