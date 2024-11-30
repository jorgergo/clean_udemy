// ==UserScript==
// @name         Udemy Clean Window
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides distracting UI elements on Udemy course pages based on focus
// @author       Jorgergo (Original script by iNdra)
// @match        https://www.udemy.com/course/*
// @homepageURL  https://github.com/jorgergo/clean_udemy
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Elements to toggle visibility
    const elementsToToggle = [
        '.shaka-control-bar--control-bar-container--OfnMI', // Shaka control bar
        '.video-viewer--header-gradient--x4Zw0', // Video header
        '.video-viewer--title-overlay--YZQuH', // Shadow bar
        '.next-and-previous--container--kZxyo.next-and-previous--previous--dBI5b', // Previous arrow
        '.next-and-previous--container--kZxyo.next-and-previous--next--8Avih', // Next arrow
        'button[data-purpose="open-course-content"]' // Course content toggle button
    ];

    // Function to toggle visibility of elements
    const toggleVisibility = (isVisible) => {
        const visibility = isVisible ? 'visible' : 'hidden';
        elementsToToggle.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.visibility = visibility;
            }
        });
    };

    // Event handlers for focus/blur
    const handleWindowBlur = () => {
        toggleVisibility(false); // Hide elements when window loses focus
    };

    const handleWindowFocus = () => {
        toggleVisibility(true); // Show elements when window regains focus
    };

    // Initialize script
    window.addEventListener('load', function () {
        // Add blur and focus event listeners
        window.addEventListener('blur', handleWindowBlur);
        window.addEventListener('focus', handleWindowFocus);

        // Set initial visibility state based on current focus
        toggleVisibility(document.hasFocus());
    });
})();
