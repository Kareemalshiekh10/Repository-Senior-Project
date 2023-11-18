document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        item.addEventListener('click', function () {
            if (item.classList.contains('expanded')) {
                item.classList.remove('expanded');
                item.classList.add('collapsed');
                // Change the arrow from ✕ to ▼ when collapsed
                const arrow = item.querySelector('.faq-arrow');
                arrow.textContent = '▼';
            } else {
                item.classList.remove('collapsed');
                item.classList.add('expanded');
                // Change the arrow from ▼ to ✕ when expanded
                const arrow = item.querySelector('.faq-arrow');
                arrow.textContent = '✕';
            }
        });
    });
});
