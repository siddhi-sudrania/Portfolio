// Add filter functionality for internships
document.addEventListener('DOMContentLoaded', () => {
    const internshipCards = document.querySelectorAll('.internship-card');

    // Add hover animation enhancement
    internshipCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const techStack = card.querySelector('.tech-stack');
            techStack.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            const techStack = card.querySelector('.tech-stack');
            techStack.style.transform = 'translateY(0)';
        });
    });

    // Add click handler for tech stack items
    const techItems = document.querySelectorAll('.tech-stack span');
    techItems.forEach(item => {
        item.addEventListener('click', () => {
            const technology = item.textContent.toLowerCase();
            filterInternships(technology);
        });
    });
});

// Filter internships based on technology
function filterInternships(technology) {
    const internshipCards = document.querySelectorAll('.internship-card');
    
    internshipCards.forEach(card => {
        const techStack = card.querySelector('.tech-stack').textContent.toLowerCase();
        const shouldShow = technology === 'all' || techStack.includes(technology);
        card.style.display = shouldShow ? 'block' : 'none';
    });
}