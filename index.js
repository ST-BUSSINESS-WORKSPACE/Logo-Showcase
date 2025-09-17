// Array of random Google logos (using placeholder logos from logos-download.com)
const logos = [
    'https://tse2.mm.bing.net/th/id/OIP.-LBL7W406BTHJOIDdCLrUAHaEK?pid=Api&P=0&h=220',
    'https://tse3.mm.bing.net/th/id/OIP.u9sAsi_7MmAUxkTvFss6BgHaHa?pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th/id/OIP.D6KDJfkaEfD7O3HiYOnPuwHaHa?pid=Api&P=0&h=220',
    'https://tse4.mm.bing.net/th/id/OIP.VZFRi8SjLGWxGYV47deMIwHaHa?pid=Api&P=0&h=220',
    'https://tse2.mm.bing.net/th/id/OIP.hQCbcTTaCtvH5tTufiVLPQHaHa?pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th/id/OIP.DYxTI-EVNde1NKgQBeCGxgHaEK?pid=Api&P=0&h=220',
    'https://tse4.mm.bing.net/th/id/OIP.b69OXJR53baruwNng8h41wHaEc?pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th/id/OIP.UE10scB4r2yFJgVyrd-mZgHaEe?pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th/id/OIP._UppI57jxiSSMKljcssHbAHaHa?pid=Api&P=0&h=220',
    'https://tse3.mm.bing.net/th/id/OIP.SPkK_3aDPPndT44sDFrTLQAAAA?pid=Api&P=0&h=220',
    'https://tse1.mm.bing.net/th/id/OIP.Hw1kdO3n72ldzuTsF4E8ZgAAAA?pid=Api&P=0&h=220',
    'https://tse3.mm.bing.net/th/id/OIP.LbB1VKqBgs0Gbkea25xUHgHaHa?pid=Api&P=0&h=220',
];

// Generate logo grid
const logoGrid = document.querySelector('.logo-grid');

logos.forEach(logoUrl => {
    const logoItem = document.createElement('div');
    logoItem.className = 'logo-item';

    const logoImg = document.createElement('img');
    logoImg.className = 'logo-img';
    logoImg.src = logoUrl;
    logoImg.alt = 'Company Logo';

    logoItem.appendChild(logoImg);
    logoGrid.appendChild(logoItem);
});

// Modal functionality
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const closeModal = document.querySelector('.close-modal');
const logoItems = document.querySelectorAll('.logo-item');

// Open modal with clicked logo
logoItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        modalImg.src = imgSrc;
        modal.classList.add('open');

        // Reset scale
        scale = 1;
        modalImg.style.transform = `scale(${scale})`;

        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeModalFunc() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeModalFunc);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});

// Zoom with scroll inside modal
let scale = 1;
modalImg.addEventListener('wheel', (e) => {
    e.preventDefault();

    // Adjust scale based on scroll direction
    if (e.deltaY < 0) {
        scale *= 1.1;
    } else {
        scale /= 1.1;
    }

    // Limit scale between 0.5 and 5
    scale = Math.min(Math.max(0.5, scale), 5);

    // Apply scale transformation
    modalImg.style.transform = `scale(${scale})`;
});