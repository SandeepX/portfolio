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
        }, 1000);  // Adjust the timeout duration as per the animation length
    });

    window.onload = function () {
        document.getElementById('header-title').classList.add('animate-title');
        document.getElementById('header-subtitle').classList.add('animate-subtitle');
        document.getElementById('cv-btn').classList.add('animate-button');
    };

});


