// Drop menu 
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});

// Drawer functionality
document.addEventListener('DOMContentLoaded', function() {
    const topicButtons = document.querySelectorAll('.text-box');
    const closeButtons = document.querySelectorAll('[data-drawer-close]');
    const drawers = document.querySelectorAll('.Drawer');

    // Open drawer when button is clicked
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topicId = button.getAttribute('data-topic');
            const drawer = document.getElementById(`drawer-${topicId}`);
            if (drawer) {
                drawer.showModal();
            }
        });
    });

    // Close drawer when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const drawer = button.closest('.Drawer');
            if (drawer) {
                drawer.close();
            }
        });
    });

    // Close drawer when clicking on backdrop
    drawers.forEach(drawer => {
        drawer.addEventListener('click', (e) => {
            if (e.target === drawer) {
                drawer.close();
            }
        });
    });

    // Close drawer with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            drawers.forEach(drawer => {
                if (drawer.open) {
                    drawer.close();
                }
            });
        }
    });
});
