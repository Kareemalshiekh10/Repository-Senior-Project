document.addEventListener('DOMContentLoaded', function() {
    var removeButtons = document.querySelectorAll('.B2 button');
    removeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var productDiv = button.closest('.Product1');
        if (productDiv) {
          productDiv.remove();
        }
      });
    });
  });