window.onload = function() {
    document.querySelector('.dropdown').addEventListener('mouseover', function() {
        document.querySelector('.dropdown-content').classList.add('show');
    });

    document.querySelector('.dropdown').addEventListener('mouseout', function() {
        document.querySelector('.dropdown-content').classList.remove('show');
    });
};
