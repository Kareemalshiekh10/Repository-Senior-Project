document.addEventListener('DOMContentLoaded', function() {
    // Function to animate product hover
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.classList.add('animate__animated', 'animate__pulse');
        });
        product.addEventListener('mouseleave', function() {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });
});
 