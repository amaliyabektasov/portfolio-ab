const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');
const gallery = document.getElementById('gallery');

document.addEventListener('DOMContentLoaded', function() {
    const mailtoLink = document.querySelector('a[href^="mailto:"]');
    if (mailtoLink) {
        mailtoLink.addEventListener('click', function(e) {
            console.log('Mailto link clicked');
        });
    }
});

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
    e.preventDefault();
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Hide all first
    items.forEach(item => item.style.display = 'none');

    // Show only selected
    const selected = document.querySelectorAll(`.${filter}`);
    selected.forEach(item => item.style.display = 'block');

    // Smooth fade
    gallery.classList.remove('fade');
    void gallery.offsetWidth;
    gallery.classList.add('fade');
    });
});