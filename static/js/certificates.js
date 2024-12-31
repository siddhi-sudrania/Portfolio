// Add certificate modal functionality
const certificateCards = document.querySelectorAll('.certificate-card');

certificateCards.forEach(card => {
    const viewButton = card.querySelector('.view-certificate');
    
    viewButton.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = card.querySelector('img').src;
        const title = card.querySelector('h3').innerText;
        
        showCertificateModal(imgSrc, title);
    });
});

function showCertificateModal(imgSrc, title) {
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    
    modal.innerHTML = `
        <div style="align-items:center; " class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${title}</h3>
            <img src="${imgSrc}" alt="${title}">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}