# Udemy Clean Window with Focus Detection

**Udemy Clean Window** is a Tampermonkey userscript that optimizes your Udemy course-viewing experience by automatically hiding certain distracting UI elements when the browser window is not focused. It restores the elements when you return to the window, maintaining an unobstructed and clean video player.

---

## Features

- **Automatic UI Toggling:**
  - Hides controls and navigation buttons when you switch to another application.
  - Restores them when you refocus the browser window.

- **Hidden Elements:**
  - Video player control bar.
  - Video header gradient.
  - Shadow overlay bar.
  - Next and Previous navigation arrows.
  - Course content sidebar toggle button.

- **Lightweight Script**:
  - Automatically runs on Udemy course pages without requiring manual input.

---

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension if you haven't already.
2. Click the **Tampermonkey icon** in your browser toolbar.
3. Select **Create a new script**.
4. Replace the default content with the script below and save.

```javascript
// Include the full script provided here
// ==UserScript==
// @name         Udemy Clean Window with Focus Detection
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Automatically hides certain elements on Udemy course pages when the window loses focus
// @author       iNdra
// @match        https://www.udemy.com/course/*
// @downloadURL  https://github.com/indramal/Udemy-Clean-Window/blob/main/Udemy-Clean-Window.js
// @updateURL    https://github.com/indramal/Udemy-Clean-Window.js
// @homepageURL  https://github.com/indramal/Udemy-Clean-Window/
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

