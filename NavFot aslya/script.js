// ===============================
//    Add, Get and Remove Class
// ===============================

// add class
function addClass(elem, classArr) {
    for (let i = 0; i < classArr.length; i++) {
        elem.classList.add(`${classArr[i]}`);
    }
}

// remove class
function removeClass(elem, classArr) {
    for (let i = 0; i < classArr.length; i++) {
        elem.classList.remove(`${classArr[i]}`);
    }
}

// get class name
function getClassName(elem, classPos) {
    let classString = elem.getAttribute('class');
    let className = classString.split(' ')[classPos];

    return className;
}


// selecting support center card close button
let supportCenterCardCloseBtn = document.querySelector('.close-support-center-card');

// close support center card
supportCenterCardCloseBtn.onclick = () => {
    supportCenter.classList.remove('active-support-center');
}


// ===================================
//    Add, Get and Remove Class End
// ===================================

// ============================
//    Navbar Animation Start
// ============================

// selecting navbar elements
let header = document.querySelector('header');
let sectionContent = document.querySelector('.section-content');

// actions while scroll up or down
window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('active');
        sectionContent.style.marginTop = header.offsetHeight + 'px';
    } else {
        header.classList.remove('active');
        sectionContent.style.marginTop = 0 + 'px';
    }
}

// selecting navbar elements
let navItems = document.querySelectorAll('.menu-items li');

// selecting elements for menu toggle
let toggleBar = document.querySelector('#toggle-bar');
let navigationArea = document.querySelector('.menu-items');

// selecting elements for search bar
let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');

// selecting support center card elements
let iconPhone = document.querySelector('#customer-center');
let supportCenter = document.querySelector('.support-center');

// actions while toggle button click
toggleBar.addEventListener('click', function () {
    toggleBar.classList.toggle('active-toggler');
    navigationArea.classList.toggle('active-navbar');
    searchBox.classList.remove('active-search-box');
    supportCenter.classList.remove('active-support-center');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function () {
            toggleBar.classList.remove('active-toggler');
            navigationArea.classList.remove('active-navbar');
        });
    }
});

// actions while search button click
searchBtn.addEventListener('click', function () {
    searchBox.classList.toggle('active-search-box');
    toggleBar.classList.remove('active-toggler');
    navigationArea.classList.remove('active-navbar');
    supportCenter.classList.remove('active-support-center');
});

// actions while phone button click
iconPhone.onclick = () => {
    searchBox.classList.remove('active-search-box');
    toggleBar.classList.remove('active-toggler');
    navigationArea.classList.remove('active-navbar');

    let isSupportCenterCardActive = getClassName(supportCenter, 1) === 'active-support-center';

    if (!isSupportCenterCardActive) {
        addClass(supportCenter, ['animate__animated', 'animate__bounceInRight', 'active-support-center']);

        setTimeout(() => {
            removeClass(supportCenter, ['animate__animated', 'animate__bounceInRight']);
        }, 1000);
    } else {
        supportCenter.classList.remove('active-support-center');
    }

}
// ==========================
//    Navbar Animation End
// ==========================







