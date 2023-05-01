const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const navTitle = document.querySelector('.nav__title')
const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')

const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}


const changeVisibilityTitle = (e) => {
    if (window.scrollY >= header.clientHeight - 100) {
        navTitle.classList.add('visibility')
    } else {
        navTitle.classList.remove('visibility')
    }
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}

navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', changeVisibilityTitle)
window.addEventListener('scroll', handleObserver)