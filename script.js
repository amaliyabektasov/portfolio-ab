
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initially hide columns 3 and 4
    document.querySelector('.column-3').classList.remove('column-visible');
    document.querySelector('.column-4').classList.remove('column-visible');
    
    // Remove active class from about content on load
    document.querySelector('#about-content').classList.remove('active');

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
            
            // Show column-3 when either ABOUT or WORK is clicked
            document.querySelector('.column-3').classList.add('column-visible');
            
            // If About is clicked, hide column-4
            if (target === 'about') {
                document.querySelector('.column-4').classList.remove('column-visible');
            }
            // If Work is clicked, only show the work list (column-3), hide column-4
            else if (target === 'work') {
                document.querySelector('.column-4').classList.remove('column-visible');
                // Also hide any active work details
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
            
            // Show column-4 when a work item is clicked
            document.querySelector('.column-4').classList.add('column-visible');
        });
    });
});