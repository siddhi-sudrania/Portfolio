// Filter projects <boltAction type="file" filePath="js/projects.js">// Add filter functionality for projects
const projectCards = document.querySelectorAll('.project-card');

function filterProjects(tag) {
    projectCards.forEach(card => {
        const tags = card.querySelector('.project-tags').innerText.toLowerCase();
        const shouldShow = tag === 'all' || tags.includes(tag.toLowerCase());
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Add hover effects for project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});