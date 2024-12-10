window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }


    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    const colors = [
        'linear-gradient(45deg, #ff6b6b, #f0a500)',
        'linear-gradient(45deg, #6a11cb, #2575fc)',
        'linear-gradient(45deg, #00c6ff, #0072ff)',
        'linear-gradient(45deg, #ff7e5f, #feb47b)',
        'linear-gradient(45deg, #2b5876, #4e4376)',
    ];

    let currentColorIndex = 0;

    document.getElementById('masthead').addEventListener('click', function () {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        this.style.background = colors[currentColorIndex];
        this.classList.add('animate-background');

        setTimeout(() => {
            this.classList.remove('animate-background');
        }, 1000);
    });

    window.onload = function () {
        document.getElementById('header-title').classList.add('animate-title');
        document.getElementById('cv-btn').classList.add('animate-button');
    };

    const typedText = document.getElementById("typed-text");
    const cursor = document.querySelector(".cursor");

    const texts = [
        "Full Stack Developer",
        "Expert in PHP & Laravel",
        "Skilled with Vue.js",
        "Passionate about creating elegant web applications",
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;

    function typeEffect() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typedText.textContent += texts[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(deleteEffect, 1500);
        }
    }

    function deleteEffect() {
        if (currentCharIndex > 0) {
            typedText.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(deleteEffect, 50);
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeEffect, 200);
        }
    }

    typeEffect();


});


