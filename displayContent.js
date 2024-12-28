function showView(viewId) {
    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.remove('active');
        setTimeout(() => {
            view.style.display = 'none'; // Match the transition duration
        }, 500);
    });

    // Ensure selected view is visible before adding the active class
    const selectedView = document.getElementById(viewId);
    setTimeout(() => {
        selectedView.style.display = 'block';
        setTimeout(() => {
            selectedView.classList.add('active');
        }, 10); // Allow for transition
    }, 500); // Match the transition duration of hiding other views
}