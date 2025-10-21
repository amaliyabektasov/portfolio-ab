// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Get target content
            const target = this.getAttribute('data-target');
            
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target content
            document.getElementById(`${target}-content`).classList.add('active');
            
            // If Work is clicked, show the first work by default
            if (target === 'work') {
                // Hide all work details
                document.querySelectorAll('.work-detail').forEach(detail => {
                    detail.classList.remove('active');
                });
     
            }
        });
    });

    // Work item functionality
    document.querySelectorAll('.work-item a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get work id
            const workId = this.getAttribute('data-work');
            
            // Hide all work details
            document.querySelectorAll('.work-detail').forEach(detail => {
                detail.classList.remove('active');
            });
            
            // Show selected work
            document.getElementById(workId).classList.add('active');
        });
    });
});