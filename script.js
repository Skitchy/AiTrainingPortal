// script.js
document.addEventListener('DOMContentLoaded', function () {

    // Handle "More About Us" button click
    let moreAboutUsButton = document.getElementById('toggle-info');
    let modal = document.getElementById('team-modal');

    moreAboutUsButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close the modal when clicking on "X"
    let closeButton = document.getElementsByClassName('close-button')[0];

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Optional: Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
