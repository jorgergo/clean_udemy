(function() {
    'use strict';

    // Function to add toggle button
    function addToggleButton() {
        // Select the target element before which the button should be added
        const targetElement = document.querySelector('.app--row--E-WFM.app--dashboard--Z4Zxm');

        if (targetElement) {
            // Create the toggle button
            const toggleButton = document.createElement('button');
            toggleButton.innerText = 'Clean Window';

            // Style the button
            toggleButton.style.backgroundColor = '#3498db';
            toggleButton.style.color = '#fff';
            toggleButton.style.border = 'none';
            toggleButton.style.padding = '10px 20px';
            toggleButton.style.borderRadius = '5px';
            toggleButton.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.2)';
            toggleButton.style.cursor = 'pointer';
            toggleButton.style.marginBottom = '10px';

            // Add the toggle functionality
            toggleButton.addEventListener('click', function() {

                // Get the height of the element with the specified classes
                const headerElement = document.querySelector('.app--row--E-WFM.app--header--QuLOL');
                const headerHeight = headerElement ? headerElement.offsetHeight : 0;

                if (window.scrollY !== headerHeight) {
                    window.scrollTo({
                        top: 0,        // Scroll to the top of the page
                        left: 0,       // No horizontal scroll
                        behavior: 'smooth' // Smooth scrolling
                    });
                }

                // Select and click the sidebar close button
                const specifiedButton = document.querySelector('[data-purpose="sidebar-button-close"]');
                if (specifiedButton) {
                    specifiedButton.click(); // Programmatically click the button
                }

                // Toggle the visibility of the shaka control bar
                const shakaElement = document.querySelector('.shaka-control-bar--control-bar-container--OfnMI');
                if (shakaElement) {
                    const currentVisibility = shakaElement.style.visibility;
                    shakaElement.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
                }

                // Toggle the video header gradient overlay
                const videoTitleElement = document.querySelector('.video-viewer--header-gradient--x4Zw0');
                if (videoTitleElement) {
                    const currentVisibility = videoTitleElement.style.visibility;
                    videoTitleElement.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
                }

                // Toggle the video shadow overlay
                const shadowbar = document.querySelector('.video-viewer--title-overlay--YZQuH');
                if (shadowbar) {
                    const currentVisibility = shadowbar.style.visibility;
                    shadowbar.style.visibility = currentVisibility === 'hidden' ? 'visible' : 'hidden';
                }

                // Adjust the max height of curriculum items
                const curriculumElements = document.querySelectorAll('.curriculum-item-view--scaled-height-limiter--lEOjL.curriculum-item-view--no-sidebar--LGmz-');
                curriculumElements.forEach(function(element) {
                    element.style.maxHeight = 'calc(100vh - 35px)';
                });

                if (window.scrollY !== headerHeight) {
                    setTimeout(function() {
                        window.scrollBy({
                            top: headerHeight,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 500); // Delay to ensure the first scroll is completed
                }
            });

            // Insert the button before the target element
            targetElement.parentNode.insertBefore(toggleButton, targetElement);
        }
    }

    // Run the function when the DOM is fully loaded
    window.addEventListener('load', function() {
        addToggleButton();
    });
})();
