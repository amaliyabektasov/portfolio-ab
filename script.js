// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // SHOW OVERVIEW PAGE BY DEFAULT
    document.querySelector('.column-overview').classList.add('column-visible');
    
    // Hide columns 3 and 4 initially
    document.querySelector('.column-3').classList.remove('column-visible');
    document.querySelector('.column-4').classList.remove('column-visible');
    
    // Hide about and work content initially
    document.querySelector('#about-content').classList.remove('active');
    document.querySelector('#work-content').classList.remove('active');
    
    // Remove active from navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Function to reset to overview (landing page)
    function resetToOverview() {
        // Show overview column
        document.querySelector('.column-overview').classList.add('column-visible');
        
        // Hide columns 3 and 4
        document.querySelector('.column-3').classList.remove('column-visible');
        document.querySelector('.column-4').classList.remove('column-visible');
        
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active from navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Hide all work details
        document.querySelectorAll('.work-detail').forEach(detail => {
            detail.classList.remove('active');
        });
        
        // Scroll to top of overview
        document.querySelector('.column-overview').scrollTop = 0;
    }

    // Click on name-title to go back to overview
    document.querySelector('.name-title').addEventListener('click', function(e) {
        // Only trigger if clicking directly on the name-title div, not on links inside
        if (e.target === this || e.target.tagName === 'H1' || e.target.tagName === 'H2') {
            resetToOverview();
        }
    });

    // Navigation functionality
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide overview when navigating
            document.querySelector('.column-overview').classList.remove('column-visible');
            
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
            
            // Hide overview
            document.querySelector('.column-overview').classList.remove('column-visible');
            
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
    
    // Optional: Also make the copyright clickable to reset to overview
    document.querySelector('.contact-info p').addEventListener('click', function(e) {
        if (e.target === this) {
            resetToOverview();
        }
    });
});